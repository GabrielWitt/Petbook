import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { attachmentOptions } from 'src/app/core/models/images';
import { Breed, Species } from 'src/app/core/models/species';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { PetService } from 'src/app/core/services/pet-service.service';
import { AlertsService } from 'src/app/shared/utilities/alerts';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';

@Component({
  selector: 'app-new-specie',
  templateUrl: './new-specie.component.html',
  styleUrls: ['./new-specie.component.scss'],
})
export class NewSpecieComponent implements OnInit {
  loading = false;
  progress=0;

  newImage;
  newSpecie: Species;
  newBreeds: Breed[] = [];

  validationMessages
  newSpecieForm: FormGroup;

  constructor(
    private pets: PetService,
    private alerts: AlertsService,
    private upload: ImageUploaderService,
    private images: AttachmentsService,
    public modal: ModalController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validationMessages = {
      name:[ {type: 'required', message: ' Se requiere el nombre de especie'},],
      description:[ {type: 'required', message: ' Se requiere una descripción de la especie'},],
    };
    this.newSpecieForm = this.formBuilder.group({
      name:[null, { validators: [Validators.required] }],
      description:[null, { validators: [Validators.required] }]
    });
  }

  // IMAGE SYSTEM
  addPhoto() {
    const options: attachmentOptions = {
      currentRoute: 'manager/species',
      height:null, width:null, pdf: false
    }
    this.images.presentImageOptions(options).then(imageObj => {
      if (imageObj[0] !== undefined){
        this.newImage = imageObj[0];
      }
    });
  }

  addBreed(){
    const newBreed: Breed = {
      specie: '',
      name: '',
      description: '',
    }
    this.newBreeds.push(newBreed);
  }

  saveSpecie(){
    const imageName = Date().toString()+'_Specie'+this.newSpecieForm.value.name;
    this.upload.uploadFile('SpeciesList',imageName, this.newImage.file,
    (progress)=>{ this.progress = progress })
    .then((data:any) => {
      console.log(data.url);
      let newSpecie: Species = {
        name: this.newSpecieForm.value.name,
        description: this.newSpecieForm.value.description,
        photo: data.url
      }
      this.pets.createSpecies(newSpecie)
      .then(doc => {
        console.log(doc)
        this.alerts.showAlert('ESPECIES','La nueva especie ha sido agregada','OK');
        this.modal.dismiss(true);
        this.newImage = null;
      })
      .catch(error => { console.log(error); })
    })
  }



}
