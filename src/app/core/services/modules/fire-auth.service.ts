import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { User, userFormData } from '../../models/user';
import { FirestoreActionsService } from '../firestore-actions.service';
import { MyStoreService } from '../my-store.service';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  user: User;
  session: 'session';
  credentials: 'credentials';

  constructor(
    private router: Router,
    private store: MyStoreService,
    public auth: AngularFireAuth,
    public FS: FirestoreActionsService,
    private error: ErrorHandlerService,
  ) { 
    this.session = 'session';
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = this.setUser(user);
        this.store.setData(this.session,this.user);
      } else {
        this.store.removeFile(this.session);
      }
    });
  }

  async loginSavedUser(){
    return new Promise((resolve, reject) => {
      try {
        this.store.readFile(this.credentials).then((data: any) => {
          if(data?.email && data?.password){
            this.login(data.email, data.password).then((userCredential:any) => {
              const user = userCredential.user;
              this.user = this.setUser(user);
              this.store.setData(this.session, this.user);
              resolve(user);
            })
          } else {
            resolve(false);
          }
        })
      } catch (error) {
        console.log(error);
        reject(false);
      }
    })
  }

  loginProcessUser() {
    return new Promise((resolve, reject) => {
      this.getUser().then((data: any) =>{
        if(data?.user){
          this.routerCheck(data.user).then(answer => {resolve(answer);})
        } else{
          resolve(false);
        }
      }).catch(error => {
        console.log(error);
        reject(false);
      });
    })
  }

  async routerCheck(user){
    if(user.email){
      if(user.emailVerified){ 
        switch(user.displayName){
          case 'administrador':
            this.router.navigateByUrl('administrator');
            return true;
          case 'cliente':
            this.router.navigateByUrl('client');
            return true;
          default:
            this.router.navigateByUrl('client');
            return true;
        } 
      } else { 
        this.router.navigateByUrl('general/verify-email/'+user.email);
        return true;
      }
    }else{
      return false;
    }
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
        await this.store.setData(this.credentials, { email:email, password:password })
        // Signed in 
        const user = userCredential.user;
        this.user = this.setUser(user);
        await this.store.setData(this.session, this.user);
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
    return new Promise(async (resolve, reject) => {
      try {
        let session = await this.store.readFile(this.session);
        if (!session) {  session = await this.loginSavedUser(); }
        if (session) { 
          const data = await this.readUserForm(session.uid);
          resolve({user: this.user, data});
        } else { 
          this.router.navigateByUrl('general'); 
          resolve(null);
        }
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
      this.auth.signOut().then(async () => {
        await this.store.clearStore();
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
