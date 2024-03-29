import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/cousers';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { User, userFormData } from 'src/app/core/models/user';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { CoursesService } from 'src/app/core/services/modules/courses.service';
import { DetailCourseComponent } from 'src/app/shared/components/course/detail-course/detail-course.component';
import { NewCourseComponent } from 'src/app/shared/components/course/new-course/new-course.component';
import { ExamCourseComponent } from 'src/app/shared/components/course/exam-course/exam-course.component';

@Component({
  selector: 'app-courses-manager',
  templateUrl: './courses-manager.page.html',
  styleUrls: ['./courses-manager.page.scss'],
})
export class CoursesManagerPage implements OnInit {
  user: User;
  userData: userFormData;
  loading = true;
  loadingColor = false;
  loadingList = [1,2,3,4,5]
  CourseCertificate = '../../../../assets/certificate.jpg'

  courseList: Course[] = [];

  constructor(
    private auth: FireAuthService,
    private courses: CoursesService,
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
      this.courseList = await this.courses.readCourseList();
      return 'done';
    } catch (error) {
      console.log(error);
    }
  }

  async detailCourse(course){
    const modal = await this.modal.create({
      component: DetailCourseComponent,
      componentProps: {course, user: this.userData},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){
      console.log(modalResult.data.action)
      if(modalResult.data.action === 'update'){
        this.loadData(); 
      } else if(modalResult.data.action === 'editCourse') {
        this.createCourse(course);
      } else if(modalResult.data.action === 'exam') {
        this.examCourse(course);
      }
    }
  }

  async examCourse(course){
    const modal = await this.modal.create({
      component: ExamCourseComponent,
      componentProps: {course, user: this.user},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.loadData();}
  }

  async createCourse(course){
    const modal = await this.modal.create({
      component: NewCourseComponent,
      componentProps: {course, user: this.user},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.loadData();}
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
    if(reload){that.courseList = await that.courses.readCourseList();}
  }

}
