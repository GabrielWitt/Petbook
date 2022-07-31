import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, userFormData } from 'src/app/core/models/user';
import { AlertsService } from 'src/app/shared/utilities/alerts';
import { VerificationFuncService } from 'src/app/shared/utilities/verificationFunc';
import { attachmentOptions, UserPhoto } from 'src/app/core/models/images';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { NewPetComponent } from 'src/app/shared/components/pets/new-pet/new-pet.component';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Pet } from 'src/app/core/models/species';
import { PetService } from 'src/app/core/services/modules/pet-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { NewNoticeComponent } from 'src/app/shared/components/notices/new-notice/new-notice.component';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {
  loading = false;
  edit = false;
  defaultUser = '../../../../assets/profile/ProfileBlank.png';
  newImage;
  progress=0;

  user: User;
  userData: userFormData;
  petList: Pet[] = [];

  registerForm: FormGroup;
  validationMessages  = {
    name:[ {type: 'required', message: ' Escribe tu nombre'},],
    lastName:[ {type: 'required', message: ' Escribe tu apellido'},],
    birthday:[ {type: 'required', message: ' Ingresa tu fecha de nacimiento'},]
  };

  constructor(
    private router: Router,
    private pets: PetService,
    private alerts: AlertsService,
    private upload: ImageUploaderService,
    private images: AttachmentsService,
    private modal: ModalController,
    private routerOutlet: IonRouterOutlet,
    private formBuilder: FormBuilder,
    private auth: FireAuthService,
    private verification: VerificationFuncService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:[null, { validators: [Validators.required, Validators.minLength(2)] }],
      lastName:[null, { validators: [Validators.required, Validators.minLength(3)] }],
      birthday:[null, { validators: [Validators.required] }]
    });
    this.checkUser().then(ok => {
      this.images.loadSaved().then((attachment: any) => {
        if (attachment.length && attachment[0].deploy){
          this.changeProfileImage(attachment[0]);
        }
      });
    });
  }

  EnterSubmit(evt, form){
    this.verification.EnterSubmit(evt,form,this.loading).then(answer => {
      if(answer){ console.log('Enter') }
    })
  }

  checkUser() {
    return new Promise((resolve, reject) => {
      try {
        this.loading = true;
        this.auth.checkUser().then((user: any) =>{
          this.user = user.user;
          this.userData = user.data;
          this.loadMyPets().then(ok => {
            this.loading = false;
            resolve('done')
          });
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
        reject(error);
      }
    })
  }

  async loadMyPets(){
    try {
      this.petList = await this.pets.myPetList(this.user.uid);
      return 'done';
    } catch (error) {
      console.log(error);
    }
  }

  editForm(){
    if(!this.edit){
      this.edit = !this.edit;
      this.registerForm = this.formBuilder.group({
        name:[this.userData.name, { validators: [Validators.required, Validators.minLength(2)] }],
        lastName:[this.userData.lastName, { validators: [Validators.required, Validators.minLength(3)] }],
        birthday:[this.userData.birthDate, { validators: [Validators.required] }]
      });
    } else {
      const newValues = this.registerForm.value;
      const nameCheck = this.userData.name !== newValues.name;
      const lastNameCheck = this.userData.lastName !== newValues.lastName;
      const birthDateCheck = this.userData.birthDate !== newValues.birthday;
      if(nameCheck || lastNameCheck || birthDateCheck) {
        this.loading = true;
        const data = {
          ...this.userData,
          name: newValues.name,
          lastName: newValues.lastName,
          birthDate: newValues.birthday
        }
        this.auth.uploadUserForm(this.user.uid, data)
        .then(ok => { 
          this.edit = !this.edit;
          this.alerts.showAlert('PERFIL','Tus datos han sido actualizados','OK');
          this.checkUser();
          this.loading = false;
        })
      } else{
        this.edit = !this.edit;
      }
    }
  }

  // IMAGE SYSTEM
  addPhoto() {
    const options: attachmentOptions = {
      currentRoute: 'manager/profile',
      height:null, width:null, pdf: false
    }
    this.images.presentImageOptions(options).then(imageObj => {
      if (imageObj[0] !== undefined){
        this.changeProfileImage(imageObj[0]);
      }
    });
  }

  changeProfileImage(image: UserPhoto){
    this.loading = true;
    this.newImage = image;
    const imageName = Date().toString()+'_'+this.user.uid;
    this.upload.uploadFile('profile',imageName, image.file,
    (progress)=>{ this.progress = progress })
    .then((data:any) => {
      this.auth.updateUser('administrador', data.url).then(done => {
        this.alerts.showAlert('PERFIL','Tus imagen de perfil ha sido actualizada','OK');
        this.upload.deletePicture();
        this.newImage = null;
        this.checkUser();
        this.loading = false;
      })
    })
  }

  upgradeProfile(){
    this.loading = true;
    this.auth.upgradeUser().then((done: any) => {
      this.alerts.showAlert('PERFIL',done,'OK');
      this.checkUser();
      this.loading = false;
    })
  }

  async doRefresh(refresh?){
    await this.checkUser().then(done => {
      console.log('done');
      if (refresh){ refresh.target.complete(); }
    }).catch(error => {
      console.log(error);
      if (refresh){ refresh.target.complete(); }
    })
  }

  async newPet(){
    const modal = await this.modal.create({
      component: NewPetComponent,
      componentProps: {pet: null, userData: this.userData},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.loadMyPets(); }
  }

  async editPet(pet){
    const modal = await this.modal.create({
      component: NewPetComponent,
      componentProps: {pet, userData: this.userData},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){
      console.log(modalResult.data.action)
      if(modalResult.data.action === 'update'){
        this.loadMyPets(); 
      } else if(modalResult.data.action === 'report') {
        this.newReport(modalResult.data.pet);
      }
    }
  }

  async newReport(pet){
    const modal = await this.modal.create({
      component: NewNoticeComponent,
      componentProps: {notice: null, user: this.userData, pet},
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.router.navigateByUrl('client/news'); }
  }
}
