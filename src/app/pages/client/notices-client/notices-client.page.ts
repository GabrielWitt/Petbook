import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Notice } from 'src/app/core/models/notice';
import { User, userFormData } from 'src/app/core/models/user';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { NewNoticeComponent } from 'src/app/shared/components/notices/new-notice/new-notice.component';
import { NoticeService } from 'src/app/core/services/modules/notice.service';

@Component({
  selector: 'app-notices-client',
  templateUrl: './notices-client.page.html',
  styleUrls: ['./notices-client.page.scss'],
})
export class NoticesClientPage implements OnInit {
  user: User;
  userData: userFormData;
  loading = true;
  loadingColor = false;
  loadingList = [1,2,3,4,5]

  noticeList: Notice[] = [];

  constructor(
    private auth: FireAuthService,
    private notices: NoticeService,
    private modal: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit(){
    this.loading = true;
    this.auth.checkUser().then((user: any) =>{
      this.user = user.user;
      this.userData = user.data;
      this.loadData().then(() => {
        this.loading = false;
      })
    });
  }

  async loadData(){
    try {
      this.noticeList = await this.notices.readNoticeList();
      return 'done';
    } catch (error) {
      console.log(error);
    }
  }

  async detailNotice(notice){
    const modal = await this.modal.create({
      component: NewNoticeComponent,
      componentProps: {notice, user: this.userData},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.loadData(); }
  }


  doRefresh(refresh?){
    this.loadData().then(done => {
      if (refresh){ refresh.target.complete(); }
    }).catch(error => {
      console.log(error);
      if (refresh){ refresh.target.complete(); }
    })
  }

  async reloadData(reload){
    const that = this;
    if(reload){that.noticeList = await that.notices.readNoticeList();}
  }
}
