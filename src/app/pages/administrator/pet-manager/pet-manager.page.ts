import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { BreedColor } from 'src/app/core/models/species';
import { User, userFormData } from 'src/app/core/models/user';
import { FireAuthService } from 'src/app/core/services/modules/fire-auth.service';
import { PetService } from 'src/app/core/services/modules/pet-service.service';
import { NewPetComponent } from 'src/app/shared/components/new-pet/new-pet.component';
import { AlertsService } from 'src/app/shared/utilities/alerts';
import { NewSpecieComponent } from './new-specie/new-specie.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';

@Component({
  selector: 'app-pet-manager',
  templateUrl: './pet-manager.page.html',
  styleUrls: ['./pet-manager.page.scss'],
})
export class PetManagerPage implements OnInit {
  user: User;
  userData: userFormData;
  loading = true;
  loadingColor = false;
  loadingList = [1,2,3,4,5]
  name: string;
  
  selectedTab = 'list'
  petList:any[] = [];
  speciesList = [];

  newColorShow = false;
  newColor: BreedColor;
  colorList = [];

  constructor(
    private pets: PetService,
    private auth: FireAuthService,
    private alerts: AlertsService,
    private modal: ModalController,
    private routerOutlet: IonRouterOutlet,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.auth.checkUser().then((user: any) =>{
      this.user = user.user;
      this.userData = user.data;
      this.loadData();
    });
  }

  async loadData(){
    this.loading = true;
    await this.loadPets();
    await this.loadSpecies();
    this.loading = false;
  }

  async loadPets(){
    try {
      this.petList = await this.pets.readPetList();
      return 'done';
    } catch (error) {
      console.log(error);
    }
  }
  
  async loadSpecies(){
    try {
      this.speciesList = await this.pets.readSpecies();
      this.colorList = await this.pets.readColors();
      return 'done';
    } catch (error) {
      console.log(error);
    }
  }

  async doRefresh(refresh?){
    if(this.selectedTab === 'list'){
      await this.loadPets();
    }else{
      await this.loadSpecies();
    }
    if (refresh){ refresh.target.complete(); }
  }

  segmentChanged(ev: any) {
    this.selectedTab = ev.detail.value;
  }

  async newType(){
    const modal = await this.modal.create({
      component: NewSpecieComponent,
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
    const modalResult = await modal.onWillDismiss();
    if(modalResult.data){ this.loadSpecies(); }
  }

  async newColorOption(){
    this.newColorShow = true;
    this.newColor = { name: '', color: '', rgbCode: ''}
  }

  async editColor(color){
    this.newColorShow = true;
    this.newColor = color;
  }

  async openSpecieDetail(specie){
    const modal = await this.modal.create({
      component: SpecieDetailComponent,
      componentProps: { specie },
      mode: 'ios',
    });
    modal.present();
  }

  async saveColorData(){
    try {
      this.loadingColor = true;
      if(this.newColor.uid){
        await this.pets.updateColor(this.newColor.uid, this.newColor)
      } else {
        await this.pets.createColor(this.newColor)
      }
      this.alerts.showAlert('COLORES',this.newColor.uid? 'Color ha sido actulizado' : 'Nuevo color agregado','OK');
      await this.loadSpecies();
      this.newColorShow = false;
      this.loadingColor = false;
      this.newColor = { name: '', color: '', rgbCode: ''}
    } catch (error) {
      console.log(error);
      this.loadingColor = false;
    }
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
    if(modalResult.data){ this.loadPets(); }
  }

}
