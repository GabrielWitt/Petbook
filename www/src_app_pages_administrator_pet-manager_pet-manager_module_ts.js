"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_pet-manager_pet-manager_module_ts"],{

/***/ 1132:
/*!******************************************************!*\
  !*** ./src/app/core/services/pet-service.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetService": () => (/* binding */ PetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_utilities_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/error-handler.service */ 3570);
/* harmony import */ var _firestore_actions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore-actions.service */ 4871);




let PetService = class PetService {
    constructor(firestore, error) {
        this.firestore = firestore;
        this.error = error;
    }
    createSpecies(data) {
        return new Promise((resolve, reject) => {
            this.firestore.createDocument('species', data)
                .then(doc => { resolve(doc); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
    readSpecies() {
        return new Promise((resolve, reject) => {
            this.firestore.readCollection('species')
                .then((docs) => { resolve(docs); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
    createColor(data) {
        return new Promise((resolve, reject) => {
            this.firestore.createDocument('colors', data)
                .then(doc => { resolve(doc); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
    updateColor(uid, data) {
        return new Promise((resolve, reject) => {
            this.firestore.setNamedDocument('colors', uid, data)
                .then(doc => { resolve(doc); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
    readColors() {
        return new Promise((resolve, reject) => {
            this.firestore.readCollection('colors')
                .then((docs) => { resolve(docs); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
    readPetList() {
        return new Promise((resolve, reject) => {
            this.firestore.readCollection('pets')
                .then((docs) => { resolve(docs); })
                .catch((error) => { reject(this.error.handle(error)); });
        });
    }
};
PetService.ctorParameters = () => [
    { type: _firestore_actions_service__WEBPACK_IMPORTED_MODULE_1__.FirestoreActionsService },
    { type: src_app_shared_utilities_error_handler_service__WEBPACK_IMPORTED_MODULE_0__.ErrorHandlerService }
];
PetService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PetService);



/***/ }),

/***/ 8034:
/*!************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/new-specie/new-specie.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewSpecieComponent": () => (/* binding */ NewSpecieComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_specie_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-specie.component.html?ngResource */ 6751);
/* harmony import */ var _new_specie_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-specie.component.scss?ngResource */ 8785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_core_services_image_uploader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/image-uploader.service */ 6071);
/* harmony import */ var src_app_core_services_pet_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pet-service.service */ 1132);
/* harmony import */ var src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utilities/alerts */ 884);
/* harmony import */ var src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utilities/attachments.service */ 5909);










let NewSpecieComponent = class NewSpecieComponent {
    constructor(pets, alerts, upload, images, modal, formBuilder) {
        this.pets = pets;
        this.alerts = alerts;
        this.upload = upload;
        this.images = images;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.progress = 0;
        this.newBreeds = [];
    }
    ngOnInit() {
        this.validationMessages = {
            name: [{ type: 'required', message: ' Se requiere el nombre de especie' },],
            description: [{ type: 'required', message: ' Se requiere una descripci??n de la especie' },],
        };
        this.newSpecieForm = this.formBuilder.group({
            name: [null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
            description: [null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }]
        });
    }
    // IMAGE SYSTEM
    addPhoto() {
        const options = {
            currentRoute: 'manager/species',
            height: null, width: null, pdf: false
        };
        this.images.presentImageOptions(options).then(imageObj => {
            if (imageObj[0] !== undefined) {
                this.newImage = imageObj[0];
            }
        });
    }
    addBreed() {
        const newBreed = {
            specie: '',
            name: '',
            description: '',
        };
        this.newBreeds.push(newBreed);
    }
    saveSpecie() {
        const imageName = Date().toString() + '_Specie' + this.newSpecieForm.value.name;
        this.upload.uploadFile('SpeciesList', imageName, this.newImage.file, (progress) => { this.progress = progress; })
            .then((data) => {
            console.log(data.url);
            let newSpecie = {
                name: this.newSpecieForm.value.name,
                description: this.newSpecieForm.value.description,
                photo: data.url
            };
            this.pets.createSpecies(newSpecie)
                .then(doc => {
                console.log(doc);
                this.alerts.showAlert('ESPECIES', 'La nueva especie ha sido agregada', 'OK');
                this.modal.dismiss(true);
                this.newImage = null;
            })
                .catch(error => { console.log(error); });
        });
    }
};
NewSpecieComponent.ctorParameters = () => [
    { type: src_app_core_services_pet_service_service__WEBPACK_IMPORTED_MODULE_3__.PetService },
    { type: src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_4__.AlertsService },
    { type: src_app_core_services_image_uploader_service__WEBPACK_IMPORTED_MODULE_2__.ImageUploaderService },
    { type: src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
NewSpecieComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-new-specie',
        template: _new_specie_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_specie_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewSpecieComponent);



/***/ }),

/***/ 3953:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/pet-manager-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetManagerPageRoutingModule": () => (/* binding */ PetManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pet_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-manager.page */ 2157);




const routes = [
    {
        path: '',
        component: _pet_manager_page__WEBPACK_IMPORTED_MODULE_0__.PetManagerPage,
    }
];
let PetManagerPageRoutingModule = class PetManagerPageRoutingModule {
};
PetManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PetManagerPageRoutingModule);



/***/ }),

/***/ 7793:
/*!***********************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/pet-manager.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetManagerPageModule": () => (/* binding */ PetManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pet_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-manager-routing.module */ 3953);
/* harmony import */ var _pet_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-manager.page */ 2157);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _new_specie_new_specie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-specie/new-specie.component */ 8034);
/* harmony import */ var _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specie-detail/specie-detail.component */ 2879);










let PetManagerPageModule = class PetManagerPageModule {
};
PetManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _pet_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.PetManagerPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [
            _pet_manager_page__WEBPACK_IMPORTED_MODULE_1__.PetManagerPage,
            _new_specie_new_specie_component__WEBPACK_IMPORTED_MODULE_3__.NewSpecieComponent,
            _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_4__.SpecieDetailComponent
        ]
    })
], PetManagerPageModule);



/***/ }),

/***/ 2157:
/*!*********************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/pet-manager.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetManagerPage": () => (/* binding */ PetManagerPage)
/* harmony export */ });
/* harmony import */ var _Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pet_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-manager.page.html?ngResource */ 9114);
/* harmony import */ var _pet_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-manager.page.scss?ngResource */ 1413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_core_services_pet_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/pet-service.service */ 1132);
/* harmony import */ var src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utilities/alerts */ 884);
/* harmony import */ var _new_specie_new_specie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-specie/new-specie.component */ 8034);
/* harmony import */ var _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specie-detail/specie-detail.component */ 2879);










let PetManagerPage = class PetManagerPage {
  constructor(pets, alerts, modal, routerOutlet) {
    this.pets = pets;
    this.alerts = alerts;
    this.modal = modal;
    this.routerOutlet = routerOutlet;
    this.loading = true;
    this.loadingColor = false;
    this.loadingList = [1, 2, 3, 4, 5];
    this.selectedTab = 'types'; // 'list'

    this.petList = [];
    this.speciesList = [];
    this.newColorShow = false;
    this.colorList = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var _this = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      yield _this.loadPets();
      yield _this.loadSpecies();
      _this.loading = false;
    })();
  }

  loadPets() {
    var _this2 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.petList = yield _this2.pets.readPetList();
        return 'done';
      } catch (error) {
        console.log(error);
      }
    })();
  }

  loadSpecies() {
    var _this3 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.speciesList = yield _this3.pets.readSpecies();
        _this3.colorList = yield _this3.pets.readColors();
        return 'done';
      } catch (error) {
        console.log(error);
      }
    })();
  }

  doRefresh(refresh) {
    var _this4 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.selectedTab === 'list') {
        yield _this4.loadPets();
      } else {
        yield _this4.loadSpecies();
      }

      if (refresh) {
        refresh.target.complete();
      }
    })();
  }

  segmentChanged(ev) {
    this.selectedTab = ev.detail.value;
  }

  newType() {
    var _this5 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modal.create({
        component: _new_specie_new_specie_component__WEBPACK_IMPORTED_MODULE_5__.NewSpecieComponent,
        mode: 'ios',
        presentingElement: _this5.routerOutlet.nativeEl
      });
      modal.present();
      const modalResult = yield modal.onWillDismiss();

      if (modalResult.data) {
        _this5.loadSpecies();
      }
    })();
  }

  newColorOption() {
    var _this6 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.newColorShow = true;
      _this6.newColor = {
        name: '',
        color: '',
        rgbCode: ''
      };
    })();
  }

  editColor(color) {
    var _this7 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.newColorShow = true;
      _this7.newColor = color;
    })();
  }

  openSpecieDetail(specie) {
    var _this8 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this8.modal.create({
        component: _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_6__.SpecieDetailComponent,
        componentProps: {
          specie
        },
        mode: 'ios'
      });
      modal.present();
    })();
  }

  saveColorData() {
    var _this9 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.loadingColor = true;

        if (_this9.newColor.uid) {
          yield _this9.pets.updateColor(_this9.newColor.uid, _this9.newColor);
        } else {
          yield _this9.pets.createColor(_this9.newColor);
        }

        _this9.alerts.showAlert('COLORES', _this9.newColor.uid ? 'Color ha sido actulizado' : 'Nuevo color agregado', 'OK');

        yield _this9.loadSpecies();
        _this9.newColorShow = false;
        _this9.loadingColor = false;
        _this9.newColor = {
          name: '',
          color: '',
          rgbCode: ''
        };
      } catch (error) {
        console.log(error);
        _this9.loadingColor = false;
      }
    })();
  }

};

PetManagerPage.ctorParameters = () => [{
  type: src_app_core_services_pet_service_service__WEBPACK_IMPORTED_MODULE_3__.PetService
}, {
  type: src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_4__.AlertsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet
}];

PetManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-pet-manager',
  template: _pet_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_pet_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PetManagerPage);


/***/ }),

/***/ 2879:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/specie-detail/specie-detail.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecieDetailComponent": () => (/* binding */ SpecieDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _specie_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specie-detail.component.html?ngResource */ 6138);
/* harmony import */ var _specie_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specie-detail.component.scss?ngResource */ 2763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let SpecieDetailComponent = class SpecieDetailComponent {
    constructor() {
        this.backButton = { modal: true };
        this.loading = false;
    }
    ngOnInit() {
        console.log(this.specie);
    }
    saveData() {
    }
};
SpecieDetailComponent.ctorParameters = () => [];
SpecieDetailComponent.propDecorators = {
    specie: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SpecieDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-specie-detail',
        template: _specie_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_specie_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpecieDetailComponent);



/***/ }),

/***/ 8785:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/new-specie/new-specie.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".profileCircle {\n  --border-radius: 50%;\n  --size: 40pt;\n  position: relative;\n}\n\n.redImage {\n  border: 3pt solid var(--ion-color-danger);\n}\n\n.cameraButton {\n  position: absolute;\n  background-color: var(--ion-color-medium);\n  top: 25pt;\n  left: 25pt;\n  width: 20pt;\n  height: 20pt;\n  font-size: 15pt;\n  border-radius: 50%;\n  padding: 2pt;\n}\n\n.uploadingImage {\n  position: absolute;\n  top: 10pt;\n  left: 10pt;\n}\n\n.imageProfile {\n  position: absolute;\n  font-size: 36pt;\n}\n\n.loadingImage {\n  position: absolute;\n  top: 41pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zcGVjaWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9JbmdlbmllcmklQ0MlODFhJTIwZGUlMjBTb2Z0d2FyZS9QZXRib29rL3NyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9wZXQtbWFuYWdlci9uZXctc3BlY2llL25ldy1zcGVjaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJuZXctc3BlY2llLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVDaXJjbGV7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1zaXplOiA0MHB0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlZEltYWdle1xuICAgIGJvcmRlcjogM3B0IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uY2FtZXJhQnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB0b3A6IDI1cHQ7XG4gICAgbGVmdDogMjVwdDtcbiAgICB3aWR0aDogMjBwdDtcbiAgICBoZWlnaHQ6IDIwcHQ7XG4gICAgZm9udC1zaXplOiAxNXB0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAycHQ7XG59XG5cbi51cGxvYWRpbmdJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB0O1xuICAgIGxlZnQ6IDEwcHQ7XG59XG5cbi5pbWFnZVByb2ZpbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMzZwdDtcbn1cblxuLmxvYWRpbmdJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MXB0O1xufSIsIi5wcm9maWxlQ2lyY2xlIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tc2l6ZTogNDBwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVkSW1hZ2Uge1xuICBib3JkZXI6IDNwdCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmNhbWVyYUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRvcDogMjVwdDtcbiAgbGVmdDogMjVwdDtcbiAgd2lkdGg6IDIwcHQ7XG4gIGhlaWdodDogMjBwdDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDJwdDtcbn1cblxuLnVwbG9hZGluZ0ltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHQ7XG4gIGxlZnQ6IDEwcHQ7XG59XG5cbi5pbWFnZVByb2ZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzZwdDtcbn1cblxuLmxvYWRpbmdJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MXB0O1xufSJdfQ== */";

/***/ }),

/***/ 1413:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/pet-manager.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXQtbWFuYWdlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2763:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/specie-detail/specie-detail.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6751:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/new-specie/new-specie.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"modal.dismiss(false)\">\n        Cancelar\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Nueva Especie</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"success\" (click)=\"saveSpecie()\" [disabled]=\"!newSpecieForm.valid\">\n        Guardar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #email=\"ngForm\" [formGroup]=\"newSpecieForm\" novalidate>\n  \n    <ion-item>\n      <ion-thumbnail *ngIf=\"!newImage\" slot=\"start\" class=\"profileCircle redImage\" (click)=\"addPhoto()\">\n        <ion-icon class=\"imageProfile\" name=\"paw-outline\"></ion-icon>\n        <div class=\"cameraButton\">\n          <ion-icon name=\"camera-outline\" color=\"light\"></ion-icon>\n        </div>\n      </ion-thumbnail>\n      <ion-thumbnail *ngIf=\"newImage\" slot=\"start\" class=\"profileCircle\">\n        <img src=\"{{newImage.webPath}}\">\n        <ion-spinner *ngIf=\"progress > 0\" class=\"uploadingImage\" size=\"large\" name=\"circles\"></ion-spinner>\n        <ion-progress-bar *ngIf=\"progress > 0\" class=\"loadingImage\" color=\"primary\" [value]=\"progress\"></ion-progress-bar>\n      </ion-thumbnail>\n      <ion-label position=\"stacked\">Nombre de Especie:</ion-label>\n      <ion-input color=\"dark\" formControlName=\"name\" type=\"text\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ng-container *ngFor=\"let validation of validationMessages.name\">\n      <div class=\"error-message\" *ngIf=\"newSpecieForm.get('name').hasError(validation.type) && (newSpecieForm.get('name').dirty || newSpecieForm.get('name').touched)\">\n        <ion-text class=\"ion-padding-start\" color=\"danger\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon>  {{ validation.message }}\n        </ion-text>\n      </div>\n    </ng-container>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Description de Especie:</ion-label>\n      <ion-textarea placeholder=\"Ingrese la info de la especie aqu??...\" color=\"dark\" autoGrow=\"true\" formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ng-container *ngFor=\"let validation of validationMessages.description\">\n      <div class=\"error-message\" *ngIf=\"newSpecieForm.get('description').hasError(validation.type) && (newSpecieForm.get('description').dirty || newSpecieForm.get('description').touched)\">\n        <ion-text class=\"ion-padding-start\" color=\"danger\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon>  {{ validation.message }}\n        </ion-text>\n      </div>\n    </ng-container>\n  </form>\n  <ion-row>\n    <app-big-button class=\"ion-padding-top\"  style=\"width: 100%;\" LABEL=\"Agregar Raza\" buttonType=\"\" [loading]=\"loading\" [disabled]=\"loading || !newSpecieForm.value.name\" (click)=\"addBreed()\"></app-big-button>\n  </ion-row>\n  <ion-card *ngFor=\"let item of newBreeds\">\n    <ion-item>\n      <ion-label position=\"stacked\">Your name</ion-label>\n      <ion-input [(ngModel)]=\"item.name\" placeholder=\"Your name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Your name</ion-label>\n      <ion-textarea placeholder=\"Ingrese la info de la raza aqu??...\" color=\"dark\" autoGrow=\"true\" [(ngModel)]=\"item.description\"></ion-textarea>\n    </ion-item>\n  </ion-card>\n</ion-content>";

/***/ }),

/***/ 9114:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/pet-manager.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Mascotas\"></app-main-header>\n\n<ion-content>\n  <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" value=\"list\">\n    <ion-segment-button value=\"list\">\n      <ion-label> <h2>Lista de Mascotas</h2> </ion-label> \n    </ion-segment-button>\n    <ion-segment-button value=\"types\">\n      <ion-label> <h2>Lista de Especies</h2> </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh...\" refreshingSpinner=\"dots\"></ion-refresher-content> \n  </ion-refresher>\n  \n  <app-not-data-yet-message \n    *ngIf=\"selectedTab === 'list' && petList.length == 0 && !loading\"\n    text=\"No hay mascotas a??n\" icon=\"alert-circle-outline\"\n  ></app-not-data-yet-message>\n\n  <app-not-data-yet-message \n    *ngIf=\"selectedTab === 'types' && speciesList.length == 0 && !loading\"\n    text=\"No hay especies a??n\" icon=\"archive-outline\"\n  ></app-not-data-yet-message>\n\n  <ion-list *ngIf=\"selectedTab === 'types' && speciesList.length > 0 || colorList.length>0\">\n\n    <div *ngIf=\"speciesList.length > 0 && !newColorShow\">\n      <ion-list-header>\n        <ion-label>Especies</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of speciesList\" (click)=\"openSpecieDetail(item)\" detail>\n        <ion-avatar slot=\"start\">  <img [src]=\"item.photo\"> </ion-avatar>\n        <ion-label> {{item.name}} </ion-label>\n      </ion-item>\n    </div>\n\n    <ion-card *ngIf=\"newColorShow\" class=\"ion-padding\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-button  size=\"small\" color=\"danger\" (click)=\"newColorShow = false\" \n            [disabled]=\"(!newColor.name && newColor.color && (newColor.rgbCode?.length < 7)) || loadingColor\">\n            <ion-spinner *ngIf=\"loadingColor\" style=\"margin-left: 10px;\" color=\"light\" name=\"dots\"></ion-spinner>\n            <ion-text *ngIf=\"!loadingColor\" color=\"light\">Cancelar</ion-text>\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"ion-text-uppercase ion-text-center ion-padding-top\">\n          {{newColor.uid ?'Editar':'Nuevo'}} Color\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button size=\"small\" color=\"success\" (click)=\"saveColorData()\" \n            [disabled]=\"(!newColor.name && newColor.color && (newColor.rgbCode?.length < 7)) || loadingColor\">\n            <ion-spinner *ngIf=\"loadingColor\" style=\"margin-left: 10px;\" color=\"light\" name=\"dots\"></ion-spinner>\n            <ion-text *ngIf=\"!loadingColor\" color=\"light\">Guardar</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"stacked\">Color de Pelaje:</ion-label>\n          <ion-input [(ngModel)]=\"newColor.name\" placeholder=\"Nombre Color\"></ion-input>\n        </ion-item>\n        <ion-text class=\"ion-padding-start\" color=\"danger\" *ngIf=\"!newColor.name\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon> Ingrese un nombre\n        </ion-text>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Color de referencia:</ion-label>\n          <ion-input [(ngModel)]=\"newColor.color\" placeholder=\"Color Referenc??a\"></ion-input>\n        </ion-item>\n        <ion-text class=\"ion-padding-start\" color=\"danger\" *ngIf=\"!newColor.color\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon> Ingrese una referencia\n        </ion-text>\n  \n        <ion-item>\n          <ion-avatar style=\"border: 1px solid black;\" size=\"small\" slot=\"start\" *ngIf=\"newColor.rgbCode.length > 1\" [ngStyle]=\"{ 'background-color': newColor.rgbCode }\">\n          </ion-avatar>\n          <ion-label position=\"stacked\">Color en c??digo:</ion-label>\n          <ion-input [(ngModel)]=\"newColor.rgbCode\" placeholder=\"Busque codigo de color rgb en google y pegue aqu??\"></ion-input>\n        </ion-item>\n        <ion-text class=\"ion-padding-start\" color=\"danger\" *ngIf=\"!newColor.rgbCode\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon> Ingrese un c??digo\n        </ion-text>\n        <ion-text class=\"ion-padding-start\" color=\"danger\" *ngIf=\"newColor.rgbCode.length > 0 && newColor.rgbCode.length < 7\"> \n          <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon> Codigo incompleto \n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list-header *ngIf=\"colorList.length > 0\">\n      <ion-label>Colores Disponibles</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let color of colorList\">\n      <ion-avatar style=\"border: 1px solid black;\" size=\"small\" slot=\"start\" [ngStyle]=\"{ 'background-color': color.rgbCode }\"></ion-avatar>\n      <ion-label> {{color.name}} ({{color.color}}) </ion-label>\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"editColor(color)\">Editar</ion-button>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list *ngIf=\"loading\">\n    <ion-item *ngFor=\"let item of loadingList\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n  <ion-fab *ngIf=\"selectedTab === 'types' && !loadingColor && !loading && !newColorShow\" horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button close-icon=\"close-outline\" id=\"open-modal\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"secondary\" (click)=\"newColorOption()\">\n        <ion-icon name=\"brush-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"secondary\" (click)=\"newType()\">\n        <ion-icon name=\"extension-puzzle-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>  \n</ion-content>\n";

/***/ }),

/***/ 6138:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/administrator/pet-manager/specie-detail/specie-detail.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <app-detail-header [title]=\"specie.name\" [backButton]=\"backButton\" [endButton]=\"{show:false}\" ></app-detail-header>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <app-big-button LABEL=\"Guardar\" buttonType=\"\" [loading]=\"loading\" [disabled]=\"loading\" (click)=\"saveData()\"></app-big-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_pet-manager_pet-manager_module_ts.js.map