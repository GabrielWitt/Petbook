import { Injectable } from '@angular/core';
import { 
  getFirestore, 
  doc, addDoc, setDoc, getDoc, updateDoc, serverTimestamp,
  collection, query, where, getDocs, orderBy
} from "firebase/firestore";
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

  readCollection(folderName:string){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      const q = query(collection(db,folderName),orderBy("name"))
      getDocs(q)
      .then(querySnapshot => {
        let docList = [];
        querySnapshot.forEach((doc) => {
          docList.push(doc.data())
        });
        resolve(docList); 
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readCollectionFilter(folderName:string, filterName: string, filterValue: any){
    const db = getFirestore();
    const q = query(collection(db,folderName), where(filterName, "==", filterValue));
  }

  createDocument(folder: string, data){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      data['createddAt'] = serverTimestamp();
      addDoc(collection(db, folder), data)
      .then((done: any) => { 
        this.updateDocument(folder,done)
        .then(updated => {resolve(updated); })
        .catch((error) => { reject(this.error.handle(error)); });
      })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  updateDocument(folder: string, snapshot){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      const ref = doc(db, folder, snapshot.id)
      updateDoc(ref, {uid:snapshot.id})
      .then(done => { resolve(done) })
      .catch((error) => { reject(this.error.handle(error)); });
    })
  }

  setNamedDocument(folder: string, filename: string, data){
    return new Promise((resolve, reject) => {
      const db = getFirestore();
      data['updatedAt'] = serverTimestamp();
      setDoc(doc(db, folder, filename), data)
      .then((done: any) => { resolve(done); })
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
