import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'firebase/auth';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { AlertsService } from 'src/app/shared/utilities/alerts';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  email: string;
  loading = false;
  errorMessage = ''

  constructor(
    private routerParams: ActivatedRoute,
    private router: Router,
    private auth: FireAuthService,
    private alerts: AlertsService 
  ) { }

  ngOnInit() {
    console.log(this.routerParams.snapshot.params.email)
    if(this.routerParams.snapshot.params.email){
      this.email = this.routerParams.snapshot.params.email;
    }
  }

  resendEmail(){
    this.loading = true;
    this.errorMessage = '';
    this.auth.verifyEmail().then((done: string) => {
      this.loading = false;
      this.alerts.showAlert('', done + ' a ' + this.email, 'OK')
    }).catch(error => { this.errorMessage = error; })
  }

  checkUser() {
    this.loading = true;
    this.errorMessage = '';
    this.loading = true;
    this.auth.checkUser().then((user: any) =>{
      if(user.user){
        if(user.user.emailVerified){ 
          switch(user.user.displayName){
            case 'administrador':
              this.router.navigateByUrl('administrator');
              this.loading = false;
              break;
            case 'cliente':
              this.router.navigateByUrl('client');
              this.loading = false;
              break;
            default:
              this.router.navigateByUrl('client');
              this.loading = false;
              break;
          } 
        } else { 
          this.errorMessage = 'Email no ha sido verificado';
          this.loading = false;
        }
      }else{ 
        this.alerts.showAlert('', 'La sessión ha expirado, intente ingresar nuevamente' + this.email, 'OK')
        this.router.navigateByUrl('general');
        this.loading = false;
      }
    }).catch(error => {
      console.log(error);
      this.loading = false;
    });
    this.auth.getUser().then((user: User) =>{
      this.loading = false;
    });
  }

  cancel(){
    this.loading = true;
    this.errorMessage = '';
    this.auth.signOut().then(done => {
      this.loading = false;
      this.router.navigateByUrl('general/login');
    });
  }

}
