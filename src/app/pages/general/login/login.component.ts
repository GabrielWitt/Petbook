import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { RouteHistoryService } from 'src/app/shared/utilities/route-history';
import { VerificationFuncService } from 'src/app/shared/utilities/verificationFunc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  block = false;
  loading = false;
  validateCode = false;
  messageError: string;

  loginForm: FormGroup;
  validationMessages

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: FireAuthService,
    private verification: VerificationFuncService,
    public history: RouteHistoryService
    ) { }

  ngOnInit() {
    this.validationMessages = {
      email: [
        {type: 'required', message: 'Email requerido'},
        {type: 'email', message: 'Formato incorrecto'}
      ],
      password: [
        { type: 'required', message: 'Contraseña requerida'},
      ]
    };
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this.checkUser();
  }

  checkUser() {
    this.loading = true;
    this.auth.getUser().then((data: any) =>{
      if(data.user && data.user.email){
        if(data.user.emailVerified){ 
          switch(data.user.displayName){
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
          this.router.navigateByUrl('general/verify-email/'+data.user.email);
          this.loading = false;
        }
      }else{
        this.loading = false;
      }
    }).catch(error => {
      console.log(error);
      this.loading = false;
    });
  }

  EnterSubmit(evt, form){
    this.verification.EnterSubmit(evt,form,this.loading).then(answer => {
      if(answer){ this.loginProcess(this.loginForm.value); }
    })
  }

  loginProcess(form) {
    this.loading = true;
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password)
    .then(() => { this.checkUser();  })
    .catch(error => {
      this.messageError = error;
      this.loading = false;
    })
  }

  forgotPassword(){
    this.router.navigateByUrl('general/forgot-password')
  }

  registrase(){
    this.router.navigateByUrl('general/signup')
  }

}
