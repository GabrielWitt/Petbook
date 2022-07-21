import { Injectable } from '@angular/core';
import { getFirestore, doc, setDoc, collection, addDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreActionsService {

  constructor(
    private error: ErrorHandlerService,
  ) { }

  createCollection(collection: string, filename: string, data){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      setDoc(doc(db, collection, filename), data)
      .then(done => { resolve(done) })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  updateCollection(){
      
  }

  readCollection(){
      
  }

  createDocument(folder: string, data){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      data['createddAt'] = serverTimestamp();
      addDoc(collection(db, folder), data)
      .then((done: any) => { 
        this.updateDocument(folder,done.uid)
        resolve(done) 
      })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  setNamedDocument(folder: string, filename: string, data){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      data['updatedAt'] = serverTimestamp();
      setDoc(doc(db, folder, filename), data)
      .then(done => { resolve(done); })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  updateDocument(folder: string, uid: string){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      const ref = doc(db, folder, uid)
      updateDoc(ref, {uid})
      .then(done => { resolve(done) })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  readDocument(folder: string, filename: string){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      getDoc(doc(db, folder, filename))
      .then(docSnap => { 
        if (docSnap.exists()) {
          resolve(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          reject('Archivo no encontrado');
        }
      })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

}
