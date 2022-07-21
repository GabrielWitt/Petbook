import { Injectable } from '@angular/core';
import { Species } from '../models/species';
import { FirestoreActionsService } from './firestore-actions.service';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  constructor(private firestore: FirestoreActionsService) { }

  createSpecies(){
    const Species: Species = {
      name: 'Perro',
      description: 'Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo), llamado perro doméstico o can, y en algunos lugares coloquialmente llamado chucho, tuso, choco, entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis. En el 2013, la población mundial estimada de perros estaba entre setecientos millones y novecientos ochenta y siete millones. Su tamaño (o talla), su forma y su pelaje es muy diverso y varía según la raza. Posee un oído y un olfato muy desarrollados, y este último es su principal órgano sensorial. Su longevidad media es de diez a trece años,​ dependiendo de la raza.'
    }
    this.firestore.createDocument('species',Species)
  }

  readSpecies(){

  }

  createBreed(){

  }

  readBreed(){

  }
}
