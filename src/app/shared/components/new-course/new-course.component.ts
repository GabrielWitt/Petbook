import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Course, Exam, Question } from 'src/app/core/models/cousers';
import { attachmentOptions } from 'src/app/core/models/images';
import { shortUser, userFormData } from 'src/app/core/models/user';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { CoursesService } from 'src/app/core/services/modules/courses.service';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';
import { AlertsService } from '../../utilities/alerts';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent implements OnInit {
  @Input() user: userFormData;
  @Input() course: Course;
  author: shortUser;
  myCourse: Course = {
    title: '',
    description: '',
    video: '',
    exam: null,
    author: null
  }
  newQuestion: Question = {
    question: '',
    answers: [{text:'', correct: false},{text:'', correct: false},{text:'', correct: false}]
  }

  newExamen: Exam = {
    questions: [ this.newQuestion, this.newQuestion, this.newQuestion, this.newQuestion, this.newQuestion ]
  }

  loading = false;
  editCourseForm = false;
  progress = 0;
  newImage;

  constructor(
    public modal: ModalController,
    private courses: CoursesService,
    private alerts: AlertsService,
    private images: AttachmentsService,
    private upload: ImageUploaderService,
  ) { }

  ngOnInit() {
    if(this.course){
      this.myCourse = this.course;
    }else{
      this.myCourse.author = {
        uid: this.user.uid,
        photo: this.user.photo,
        email: this.user.email,
        name: this.user.name + ' ' + this.user.lastName
      }
    }
  }

  titleListener(e){
    this.myCourse.title = e.detail.value;
  }
  
  descriptionListener(e){
    this.myCourse.description = e.detail.value;
  }
  
  questionListener(index, e){
    this.newExamen.questions[index].question = e.detail.value;
  }
  
  answerListener(index, number, e){
    this.newExamen.questions[index].answers[number].text = e.detail.value;
  }
  
  checkBoxListener(index, iNumber, e){
    console.log(index, iNumber)
    if(e.detail.checked){
      let count = 0;
      this.newExamen.questions[index].answers.forEach(correct => {
        if(count === iNumber){this.newExamen.questions[index].answers[iNumber].correct = e.detail.checked;}
        else{this.newExamen.questions[index].answers[count].correct = false;}
        count++;
      })
    } else {
      this.newExamen.questions[index].answers[iNumber].correct = e.detail.checked;
    }
  }

  editCourse(){
    if(this.editCourseForm){
      this.myCourse = this.course;
      this.editCourseForm = false;
    } else {
      this.editCourseForm= true;
    }
  }

  async createCourse(){
    this.myCourse.exam = this.newExamen;
    console.log(this.myCourse);
    /*
    try {
      this.loading = true;
      console.log(this.myCourse);
      if(this.course){
        await this.courses.UpdateCourse(this.myCourse);
      }else{
        await this.courses.createCourse(this.myCourse);
      }
      this.alerts.showAlert( 'CURSOS', 
      this.course? 'Datos de '+ this.myCourse.title + ' actualizados' : 'Nuevo curso agregado', 'OK');
      this.loading = false;
      this.modal.dismiss(true);
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
    */
  }

  // IMAGE SYSTEM
  addPhoto() {
    const options: attachmentOptions = {
      currentRoute: (this.user.manager?'administrator':'client') + '/courses',
      height:null, width:null, pdf: false
    }
    this.images.presentImageOptions(options).then(imageObj => {
      if (imageObj[0] !== undefined){
        this.newImage  = imageObj[0];
      }
    });
  }

  uploadPhoto(){
    return new Promise<string>((resolve, reject) => {
      const imageName = Date().toString()+'_Notice_'+this.myCourse.title;
      this.upload.uploadFile('NoticeList',imageName, this.newImage.file,
      (progress)=>{ this.progress = progress })
      .then((data:any) => {
        this.upload.deletePicture();
        resolve(data.url);
      }).catch(error => { console.log(error); reject(error) })
    })
  }

}