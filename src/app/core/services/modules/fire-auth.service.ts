import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { User, userFormData } from '../../models/user';
import { FirestoreActionsService } from '../firestore-actions.service';
import { MyStoreService } from '../my-store.service';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  user: User;

  constructor(
    private router: Router,
    private store: MyStoreService,
    public auth: AngularFireAuth,
    public FS: FirestoreActionsService,
    private error: ErrorHandlerService,
  ) { 
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = this.setUser(user);
        this.store.setData('session',user);
      } else {
        this.store.removeFile('session');
      }
    });
  }

  async checkUser() {
    return new Promise((resolve, reject) => {
      this.getUser().then((user) =>{
        if(user){
          resolve(user);
        }else{
          this.router.navigateByUrl('general');
          reject('user not found');
        }
      });
    })
  }

  login(email: string, password: string){
    return new Promise((resolve,reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.user = this.setUser(user);
        this.store.setData('session',this.user);
        this.getUser().then((myData: any) => {
          this.uploadUserForm(myData.user.uid, {
            uid: user.uid, 
            email: user.email, 
            photo: user.photoURL,
            name: myData.data.name, 
            lastName: myData.data.lastName, 
            birthDate: myData.data.birthDate,
            manager: myData.data.manager
          });
          resolve(user);
        })
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  registerUser(email: string, password: string, name: string, lastName: string, birthDate: Date){
    return new Promise((resolve,reject) => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.uploadUserForm(user.uid, {uid: user.uid, photo:'', email: user.email, name, lastName, birthDate, manager:false}).then(done => {resolve(user);})
        .catch((error) => { reject(this.error.handle(error)); });
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  verifyEmail(){
    return new Promise(async (resolve,reject) => {
      (await this.auth.currentUser).sendEmailVerification()
      .then(() => {
        // Email verification sent!
        resolve('Se ha enviado un email de verificación');
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  forgotPassword(email: string) {
    return new Promise((resolve,reject) => {
      this.auth.sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          resolve('Se ha enviado un email a su correo: ');
        })
        .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  setUser(userFB) {
    const user: User = {
      displayName: userFB.displayName,
      email: userFB.email,
      emailVerified: userFB.emailVerified,
      photoURL: userFB.photoURL,
      uid: userFB.uid,
    } 
    return user;
  }

  async getUser(){
    return new Promise((resolve, reject) => {
      try {
        this.store.readFile('session').then(session => {
          if (session) { 
            this.readUserForm(session.uid).then((data:userFormData) => {
              resolve({user: this.user, data});
            });
          } else { 
            this.router.navigateByUrl('general'); 
            resolve(null);
          }
        }).catch(error => { reject(error)})
      } catch (error) {
        console.log('error');
        reject(error)
      }
    })
  }

  updateUser(displayName: string, photoURL: string){
    return new Promise(async (resolve,reject) => {
      (await this.auth.currentUser).updateProfile({
        displayName,
        photoURL
      }).then(() => {
        // Profile updated!
        resolve('Tus datos se han actualizado');
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  upgradeUser(){
    return new Promise(async (resolve,reject) => {
      (await this.auth.currentUser).updateProfile({
        displayName: 'administrador'
      }).then(() => {
        // Profile updated!
        resolve('Tu tipo de usuario se ha actualizado');
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  signOut(){
    return new Promise((resolve,reject) => {
      this.auth.signOut().then(() => {
        this.store.removeFile('session');
        // Sign-out successful.
        resolve('Se ha cerrado sesión');
      })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  //DATA_ON_FIRESTORE

  readUserForm(uid: string){
    return new Promise((resolve,reject) => {
      this.FS.readDocument('users',uid)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  uploadUserForm(uid: string, data: userFormData){
    return new Promise((resolve,reject) => {
      this.FS.setNamedDocument('users',uid, data)
      .then(data => { resolve('done'); })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }
}
