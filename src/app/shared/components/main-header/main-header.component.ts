import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/core/services/firebase.service';
import { AlertsService } from '../../utilities/alerts';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  loading = false;
  @Input() title: string;

  constructor(
    private router: Router,
    private alerts: AlertsService,
    private auth: FirebaseAuthService,
  ) { }

  ngOnInit() {}

  cerrarSesion(){
    this.loading = true;
    this.alerts.AlertConfirm('','¿Seguro que desea salir de su sesión?').then(answer => {
      if(answer){
        this.auth.signOut().then(done => {
          this.loading = false;
          this.router.navigateByUrl('general/login');
        });
      }else{
        this.loading = false;
      }
    })
  }

}
