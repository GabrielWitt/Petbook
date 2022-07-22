import { Injectable } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/utilities/error-handler.service';
import { BreedColor, Pet, Species } from '../models/species';
import { FirestoreActionsService } from './firestore-actions.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private firestore: FirestoreActionsService,
    private error: ErrorHandlerService,
  ) { }

  createSpecies(data: Species){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument('species',data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readSpecies(){
    return new Promise<Species[]>((resolve,reject) => {
      this.firestore.readCollection('species')
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  createColor(data: BreedColor){
    return new Promise((resolve,reject) => {
      this.firestore.createDocument('colors',data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  updateColor(uid, data: BreedColor){
    return new Promise((resolve,reject) => {
      this.firestore.setNamedDocument('colors', uid, data)
      .then(doc => { resolve(doc) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readColors(){
    return new Promise<BreedColor[]>((resolve,reject) => {
      this.firestore.readCollection('colors')
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }

  readPetList(){
    return new Promise<Pet[]>((resolve,reject) => {
      this.firestore.readCollection('pets')
      .then((docs: any[]) => { resolve(docs) })
      .catch((error) => { reject(this.error.handle(error)); });
    });
  }
}
