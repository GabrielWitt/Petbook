import { Component, Input, OnInit } from '@angular/core';
import { Pet, shortPet } from 'src/app/core/models/species';
import { PetService } from 'src/app/core/services/modules/pet-service.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss'],
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet;
  @Input() shortPet: shortPet
  petData: Pet;

  constructor(private pets: PetService ) { }

  ngOnInit() { 
    if(this.shortPet){
      console.log(this.shortPet)
      this.pets.readMyPet(this.shortPet.uid).then(petData => {
        console.log(petData)
        this.petData = petData;
        this.shortPet.status = petData.status
      })
    }
  }

}
