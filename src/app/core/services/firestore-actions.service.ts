import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { take } from 'rxjs/operators';
import { serverTimestamp } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreActionsService {

  constructor(
    private error: ErrorHandlerService,
    private afs: AngularFirestore
  ) { }

  readCollection(folderName:string){
    return new Promise((resolve, reject) => {
      try {
        const callDoc =  this.afs.collection(folderName).valueChanges();
        callDoc.pipe(take(1)).subscribe((querySnapshot: any)=>{
          resolve(querySnapshot); 
        })
      } catch (error) {
        reject(this.error.handle(error));
      }
    });
  }

  readCollectionOrderBy(folderName:string, field: string, order?: 'desc'|'asc'){
    return new Promise((resolve, reject) => {
      const orderGo = order ? order : 'asc'
      try {
        const callDoc = this.afs.collection(folderName, ref => ref.orderBy(field,orderGo)).valueChanges();
        callDoc.pipe(take(1)).subscribe((querySnapshot: any)=>{
          resolve(querySnapshot); 
        })
      } catch (error) {
        reject(this.error.handle(error));
      }
    });
  }

  readCollectionFilter(folderName:string, filterName: string, filterValue: any){
    return new Promise((resolve, reject) => {
      try {
        const callDoc = this.afs.collection(folderName, ref => ref.where(filterName, "==", filterValue)).valueChanges();
        callDoc.pipe(take(1)).subscribe((querySnapshot: any)=>{
          resolve(querySnapshot); 
        })
      } catch (error) {
        reject(this.error.handle(error));
      }
    });
  }

  createDocument(folder: string, data){
    return new Promise((resolve, reject) => {
      data['uid'] = this.afs.createId();
      data['createdAt'] = new Date().toISOString();
      try {
        this.afs.collection(folder).doc(data.uid).set(data).then((data:any) => {
          resolve(data);
        });
      } catch (error) {
        reject(this.error.handle(error));
      }
    })
  }

  setNamedDocument(folder: string, filename: string, data){
    return new Promise((resolve, reject) => {
      data['updatedAt'] = new Date().toISOString();
      this.afs.collection(folder).doc(filename) 
      .set(JSON.parse(JSON.stringify(data)), { merge: true })
      .then((done: any) => { resolve(done); })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  readDocument(folder: string, filename: string){
    return new Promise((resolve, reject) => {
      try {
        const callDoc = this.afs.collection(folder).doc(filename).valueChanges();
          callDoc.pipe(take(1)).subscribe((data: any)=>{
          resolve(data);
        })
      } catch (error) {
        reject(this.error.handle(error));
      }
    })
  }

  eraseDocument(folder: string, filename: string){
    return new Promise((resolve, reject) => {
      try {
        const callDoc = this.afs.collection(folder).doc(filename)
        callDoc.delete().then((data: any)=>{
          resolve(data);
        })
      } catch (error) {
        reject(this.error.handle(error));
      }
    })
  }

}
