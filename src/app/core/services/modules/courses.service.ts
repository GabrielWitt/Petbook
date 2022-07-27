import { Injectable } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { Course, UserCertificate } from '../../models/cousers';
import { FirestoreActionsService } from '../firestore-actions.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseFolder = 'courses';
  certificateFolder = 'certificates';

  constructor(
    private firestore: FirestoreActionsService,
    private error: ErrorHandlerService,
  ) { }

  createCourse(data: Course){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument(this.courseFolder,data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  UpdateCourse(data: Course){
    return new Promise((resolve,reject) => {
      this.firestore.setNamedDocument(this.courseFolder, data.uid, data)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readCourseList(){
    return new Promise<Course[]>((resolve,reject) => {
      this.firestore.readCollection(this.courseFolder)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  createCertificate(data: UserCertificate){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument(this.courseFolder,data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readMyCertificatesList(){
    return new Promise<UserCertificate[]>((resolve,reject) => {
      this.firestore.readCollection(this.courseFolder)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

}
