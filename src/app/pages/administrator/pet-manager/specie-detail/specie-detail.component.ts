import { Component, Input, OnInit } from '@angular/core';
import { Species } from 'src/app/core/models/species';
import { ButtonBack } from 'src/app/shared/components/view/detail-header/detail-header.component';

@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.component.html',
  styleUrls: ['./specie-detail.component.scss'],
})
export class SpecieDetailComponent implements OnInit {
  @Input() specie: Species;
  backButton: ButtonBack = { modal: true };
  loading = false;

  constructor() { }

  ngOnInit() {
    console.log(this.specie)
  }

  saveData(){
    
  }

}
