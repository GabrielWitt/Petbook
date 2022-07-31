import { Injectable } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { FirestoreActionsService } from '../firestore-actions.service';
import { BreedColor, Pet, shortPet, Species } from '../../models/species';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  speciesFolder = 'species';
  colorsFolder = 'colors';
  petsFolder = 'pets';

  constructor(
    private firestore: FirestoreActionsService,
    private error: ErrorHandlerService,
  ) { }

  createSpecies(data: Species){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument(this.speciesFolder,data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readSpecies(){
    return new Promise<Species[]>((resolve,reject) => {
      this.firestore.readCollection(this.speciesFolder)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  createColor(data: BreedColor){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument(this.colorsFolder,data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  updateColor(uid, data: BreedColor){
    return new Promise((resolve,reject) => {
      this.firestore.setNamedDocument(this.colorsFolder, uid, data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readColors(){
    return new Promise<BreedColor[]>((resolve,reject) => {
      this.firestore.readCollection(this.colorsFolder)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readMyPet(petUID: string){
    return new Promise<Pet>((resolve,reject) => {
      this.firestore.readDocument(this.petsFolder,petUID)
      .then((docs: any) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  createMyPet(pet: Pet){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument(this.petsFolder, pet)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  updateMyPet(pet: Pet){
    return new Promise((resolve,reject) => {
      this.firestore.setNamedDocument(this.petsFolder, pet.uid, pet)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  statusMyPet(pet: Pet, status: 'lost'|'good'|'deceased'){
    return new Promise((resolve,reject) => {
      console.log(this.petsFolder, pet.uid, status);
      this.firestore.setNamedDocument(this.petsFolder, pet.uid, {status})
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readPetList(){
    return new Promise<Pet[]>((resolve,reject) => {
      this.firestore.readCollection(this.petsFolder)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  myPetList(uid){
    return new Promise<Pet[]>((resolve,reject) => {
      this.firestore.readCollectionFilter(this.petsFolder, 'ownerUid', uid)
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }
}
