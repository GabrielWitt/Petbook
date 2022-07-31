import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/core/models/species';
import { userFormData } from 'src/app/core/models/user';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet
  @Input() ownerData: userFormData

  constructor() { }

  ngOnInit() {
    console.log(this.pet)
  }

}
