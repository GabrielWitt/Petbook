import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ModalController } from '@ionic/angular';
import { Course } from 'src/app/core/models/cousers';
import { userFormData } from 'src/app/core/models/user';
import { CoursesService } from 'src/app/core/services/modules/courses.service';
import { AlertsService } from 'src/app/shared/utilities/alerts';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  defaultUser = 'assets/profile/ProfileBlank.png';
  @Input() user: userFormData;
  @Input() course: Course;
  previewUrl = '';
  loading = false;

  constructor(
    public modal: ModalController,
    public alerts: AlertsService,
    private courses: CoursesService,
    ) { }

  ngOnInit() {
    this.previewUrl = 'http://img.youtube.com/vi/' + this.course.video + '/default.jpg';
  }

  invokeVideoPlayer(){
    Browser.open({url:'https://www.youtube.com/watch?v='+this.course.video});
  }

  eraseCourse(){
    this.alerts.AlertConfirm(this.course.title,'¿Esta seguro que desea eliminar este curso?')
    .then(answer => {
      if(answer){
        this.loading = true;
        this.courses.deleteCourse(this.course.uid).then(() => {
          this.alerts.showAlert( 'ANUNCIOS', 'Anuncio: '+ this.course.title + ' ha sido eliminado.', 'OK');
          this.loading = false;
          this.modal.dismiss({action:'update'})
        })
      }
    })
  }

  editCourse(){
    this.modal.dismiss({action:'editCourse'})
  }

  doExam(){
    this.modal.dismiss({action:'exam'})
  }

}
