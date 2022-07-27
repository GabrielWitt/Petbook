import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { attachmentOptions } from 'src/app/core/models/images';
import { BreedColor, Pet, Species } from 'src/app/core/models/species';
import { userFormData } from 'src/app/core/models/user';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { PetService } from 'src/app/core/services/modules/pet-service.service';
import { UsersService } from 'src/app/core/services/modules/users.service';
import { AlertsService } from 'src/app/shared/utilities/alerts';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';
import { TimeHandlerModule } from 'src/app/shared/utilities/time-handler';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss'],
})
export class NewPetComponent implements OnInit {
  @Input() pet: Pet;
  @Input() userData: userFormData;
  speciesList: Species[];
  colorList: BreedColor[];

  myPetForm: FormGroup;

  myPetData: Pet = {
    ownerUid: '',
    name: '',
    photo: '',
    birthDate: new Date(),
    specie: '',
    breed: '',
    microchip: false,
    color1: null
  };
  newPetBreed = '';
  newPetColor1;
  newPetColor2;

  loading = true;
  showCalendar = false;
  needDate = false;
  editPetForm = false;
  progress = 0;
  newImage;
  minDate = '1990-12-31T00:00:00';
  maxDate = new Date().toISOString();
  birthDate = new Date().toISOString();
  ownerData: userFormData;

  constructor(
    private pets: PetService,
    private users: UsersService,
    private alerts: AlertsService,
    public modal: ModalController,
    private time: TimeHandlerModule,
    private images: AttachmentsService,
    private upload: ImageUploaderService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.loadSpecies().then(done => {
      if(this.pet?.ownerUid){
        this.myPetData = this.pet;
        this.myPetData.birthDate = this.time.dateTransform(this.myPetData.birthDate);
        this.birthDate = this.myPetData.birthDate
        if(this.pet.color1){
          this.newPetColor1 = this.pet.color1.uid;
        }
        if(this.pet.color2){
          this.newPetColor2 = this.pet.color2.uid;
        }
      } else {
        this.needDate = true;
      }
      console.log(this.myPetData);
      if(this.myPetData.ownerUid !== this.userData.uid){
        this.users.readUser(this.myPetData.ownerUid).then((owner: any) => {
          console.log(owner)
          this.ownerData = owner;
        })
      }
      this.loading = false;
    })
  }
  
  async loadSpecies(){
    try {
      this.speciesList = await this.pets.readSpecies();
      this.colorList = await this.pets.readColors();
      return 'done';
    } catch (error) {
      console.log(error);
      return 'error'
    }
  }

  // IMAGE SYSTEM
  addPhoto() {
    const options: attachmentOptions = {
      currentRoute: (this.userData.manager?'administrator':'client') + '/profile',
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
      const imageName = Date().toString()+'_Pet_'+this.myPetData.name;
      this.upload.uploadFile('PetList',imageName, this.newImage.file,
      (progress)=>{ this.progress = progress })
      .then((data:any) => {
        this.upload.deletePicture();
        resolve(data.url);
      }).catch(error => { console.log(error); reject(error) })
    })
  }

  showHideCalendar(){
    if(this.showCalendar){
      this.showCalendar = false;
    } else {
      this.showCalendar = true;
    }
  }

  editPet(){
    if(this.editPetForm){
      this.myPetData = this.pet;
      this.editPetForm = false;
    } else {
      this.editPetForm= true;
    }
  }

  handleCalendar(e){
    const fecha = this.time.dateTransform(e.detail.value)
    if(this.showCalendar){
      if(this.myPetData.birthDate !== fecha){ this.myPetData.birthDate = fecha;}
      this.showCalendar = false;
    } else {
      this.showCalendar = true;
    }
  }

  nameListener(e){
    this.myPetData.name = e.detail.value;
  }

  handleBreed(e){
    this.myPetData.breed = e.detail.value;
  }

  handleSpecie(e) {
    this.myPetData.specie = e.detail.value;
  }

  handleColor1(e) {
    this.colorList.forEach(color => {
      if(color.uid === e.detail.value){
        this.myPetData.color1 = color;
      }
    })
  }

  handleColor2(e) {
    this.colorList.forEach(color => {
      if(color.uid === e.detail.value){
        this.myPetData.color2 = color;
      }
    })
  }

  ckeckboxChange(e){
    this.myPetData.microchip = e.detail.checked;
  }

  async createPet(){
    try {
      this.loading = true;
      this.myPetData.ownerUid = this.userData.uid;
      if(this.newImage){ this.myPetData.photo =  await this.uploadPhoto(); }
      console.log(this.myPetData);
      if(this.pet){
        console.log('updatePet');
        await this.pets.updateMyPet(this.myPetData);
      }else{
        await this.pets.createMyPet(this.myPetData);
      }
      this.alerts.showAlert( 'MASCOTAS', 
      this.pet? 'Datos de '+ this.myPetData.name + ' actualizados' : 'Nueva mascota agregada', 'OK');
      this.loading = false;
      this.modal.dismiss(true);
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  }

}
