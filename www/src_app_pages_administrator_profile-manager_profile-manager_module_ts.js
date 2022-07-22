"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_profile-manager_profile-manager_module_ts"],{

/***/ 3457:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/administrator/profile-manager/profile-manager-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileManagerPageRoutingModule": () => (/* binding */ ProfileManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-manager.page */ 6781);




const routes = [
    {
        path: '',
        component: _profile_manager_page__WEBPACK_IMPORTED_MODULE_0__.ProfileManagerPage
    }
];
let ProfileManagerPageRoutingModule = class ProfileManagerPageRoutingModule {
};
ProfileManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileManagerPageRoutingModule);



/***/ }),

/***/ 2232:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/profile-manager/profile-manager.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileManagerPageModule": () => (/* binding */ ProfileManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-manager-routing.module */ 3457);
/* harmony import */ var _profile_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-manager.page */ 6781);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ProfileManagerPageModule = class ProfileManagerPageModule {
};
ProfileManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _profile_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileManagerPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_profile_manager_page__WEBPACK_IMPORTED_MODULE_1__.ProfileManagerPage]
    })
], ProfileManagerPageModule);



/***/ }),

/***/ 6781:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administrator/profile-manager/profile-manager.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileManagerPage": () => (/* binding */ ProfileManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-manager.page.html?ngResource */ 1862);
/* harmony import */ var _profile_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-manager.page.scss?ngResource */ 1451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/alerts */ 884);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/firebase.service */ 1683);
/* harmony import */ var src_app_shared_utilities_verificationFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utilities/verificationFunc */ 4264);
/* harmony import */ var src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utilities/attachments.service */ 5909);
/* harmony import */ var src_app_core_services_image_uploader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/image-uploader.service */ 6071);











let ProfileManagerPage = class ProfileManagerPage {
    constructor(router, alerts, upload, images, formBuilder, auth, verification) {
        this.router = router;
        this.alerts = alerts;
        this.upload = upload;
        this.images = images;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.verification = verification;
        this.loading = false;
        this.edit = false;
        this.defaultUser = '../../../../assets/profile/ProfileBlank.png';
        this.progress = 0;
    }
    ngOnInit() {
        this.validationMessages = {
            name: [{ type: 'required', message: ' Escribe tu nombre' },],
            lastName: [{ type: 'required', message: ' Escribe tu apellido' },],
            birthday: [{ type: 'required', message: ' Ingresa tu fecha de nacimiento' },]
        };
        this.registerForm = this.formBuilder.group({
            name: [null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)] }],
            lastName: [null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)] }],
            birthday: [null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }]
        });
        this.checkUser().then(ok => {
            this.images.loadSaved().then((attachment) => {
                if (attachment.length && attachment[0].deploy) {
                    this.changeProfileImage(attachment[0]);
                }
            });
        });
    }
    EnterSubmit(evt, form) {
        this.verification.EnterSubmit(evt, form, this.loading).then(answer => {
            if (answer) {
                console.log('Enter');
            }
        });
    }
    checkUser() {
        return new Promise((resolve, reject) => {
            this.loading = true;
            this.auth.checkUser().then((user) => {
                this.user = user.user;
                this.userData = user.data;
                this.loading = false;
            }).catch(error => {
                console.log(error);
                this.loading = false;
            });
        });
    }
    editForm() {
        if (!this.edit) {
            this.edit = !this.edit;
            this.registerForm = this.formBuilder.group({
                name: [this.userData.name, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)] }],
                lastName: [this.userData.lastName, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)] }],
                birthday: [this.userData.birthDate, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] }]
            });
        }
        else {
            const newValues = this.registerForm.value;
            const nameCheck = this.userData.name !== newValues.name;
            const lastNameCheck = this.userData.lastName !== newValues.lastName;
            const birthDateCheck = this.userData.birthDate !== newValues.birthday;
            if (nameCheck || lastNameCheck || birthDateCheck) {
                this.loading = true;
                this.auth.uploadUserForm(this.user.uid, newValues.name, newValues.lastName, newValues.birthday)
                    .then(ok => {
                    this.edit = !this.edit;
                    this.alerts.showAlert('PERFIL', 'Tus datos han sido actualizados', 'OK');
                    this.checkUser();
                    this.loading = false;
                });
            }
            else {
                this.edit = !this.edit;
            }
        }
    }
    // IMAGE SYSTEM
    addPhoto() {
        const options = {
            currentRoute: 'manager/profile',
            height: null, width: null, pdf: false
        };
        this.images.presentImageOptions(options).then(imageObj => {
            if (imageObj[0] !== undefined) {
                this.changeProfileImage(imageObj[0]);
            }
        });
    }
    changeProfileImage(image) {
        this.loading = true;
        this.newImage = image;
        const imageName = Date().toString() + '_' + this.user.uid;
        this.upload.uploadFile('profile', imageName, image.file, (progress) => { this.progress = progress; })
            .then((data) => {
            this.auth.updateUser(this.user.displayName, data.url).then(done => {
                this.alerts.showAlert('PERFIL', 'Tus imagen de perfil ha sido actualizada', 'OK');
                this.upload.deletePicture();
                this.newImage = null;
                this.checkUser();
                this.loading = false;
            });
        });
    }
    upgradeProfile() {
        this.loading = true;
        this.auth.upgradeUser().then((done) => {
            this.alerts.showAlert('PERFIL', done, 'OK');
            this.checkUser();
            this.loading = false;
        });
    }
};
ProfileManagerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_shared_utilities_alerts__WEBPACK_IMPORTED_MODULE_2__.AlertsService },
    { type: src_app_core_services_image_uploader_service__WEBPACK_IMPORTED_MODULE_6__.ImageUploaderService },
    { type: src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_core_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthService },
    { type: src_app_shared_utilities_verificationFunc__WEBPACK_IMPORTED_MODULE_4__.VerificationFuncService }
];
ProfileManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile-manager',
        template: _profile_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileManagerPage);



/***/ }),

/***/ 1451:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/profile-manager/profile-manager.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.profileCircle {\n  --border-radius: 50%;\n  --size: 40pt;\n  position: relative;\n}\n\n.cameraButton {\n  position: absolute;\n  background-color: var(--ion-color-medium);\n  top: 25pt;\n  left: 25pt;\n  width: 20pt;\n  height: 20pt;\n  font-size: 15pt;\n  border-radius: 50%;\n  padding: 2pt;\n}\n\n.uploadingImage {\n  position: absolute;\n  top: 10pt;\n  left: 10pt;\n}\n\n.imageProfile {\n  position: absolute;\n}\n\n.loadingImage {\n  position: absolute;\n  top: 41pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtbWFuYWdlci5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9JbmdlbmllcmklQ0MlODFhJTIwZGUlMjBTb2Z0d2FyZS9QZXRib29rL3NyYy9hcHAvcGFnZXMvYWRtaW5pc3RyYXRvci9wcm9maWxlLW1hbmFnZXIvcHJvZmlsZS1tYW5hZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJwcm9maWxlLW1hbmFnZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZmlsZUNpcmNsZXtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXNpemU6IDQwcHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FtZXJhQnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB0b3A6IDI1cHQ7XG4gICAgbGVmdDogMjVwdDtcbiAgICB3aWR0aDogMjBwdDtcbiAgICBoZWlnaHQ6IDIwcHQ7XG4gICAgZm9udC1zaXplOiAxNXB0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAycHQ7XG59XG5cbi51cGxvYWRpbmdJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB0O1xuICAgIGxlZnQ6IDEwcHQ7XG59XG5cbi5pbWFnZVByb2ZpbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9hZGluZ0ltYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQxcHQ7XG59IiwiLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9maWxlQ2lyY2xlIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tc2l6ZTogNDBwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FtZXJhQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgdG9wOiAyNXB0O1xuICBsZWZ0OiAyNXB0O1xuICB3aWR0aDogMjBwdDtcbiAgaGVpZ2h0OiAyMHB0O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMnB0O1xufVxuXG4udXBsb2FkaW5nSW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBwdDtcbiAgbGVmdDogMTBwdDtcbn1cblxuLmltYWdlUHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvYWRpbmdJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MXB0O1xufSJdfQ== */";

/***/ }),

/***/ 1862:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/profile-manager/profile-manager.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Mi Perfil\"></app-main-header>\n\n<ion-content>\n  <ion-list class=\"ion-padding\">\n    <ion-item>\n      <ion-thumbnail *ngIf=\"!newImage\" slot=\"start\" class=\"profileCircle\" (click)=\"addPhoto()\">\n        <img class=\"imageProfile\" src=\"{{user?.photoURL ? user?.photoURL : defaultUser}}\">\n        <div class=\"cameraButton\">\n          <ion-icon name=\"camera-outline\" color=\"light\"></ion-icon>\n        </div>\n      </ion-thumbnail>\n      <ion-thumbnail *ngIf=\"newImage\" slot=\"start\" class=\"profileCircle\">\n        <img src=\"{{newImage.webPath}}\">\n        <ion-spinner class=\"uploadingImage\" size=\"large\" name=\"circles\"></ion-spinner>\n        <ion-progress-bar class=\"loadingImage\" color=\"primary\" [value]=\"progress\"></ion-progress-bar>\n      </ion-thumbnail>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"dark\">\n          <ion-card-title>{{userData ? userData.name + ' ' + userData.lastName : 'Loading...'}}</ion-card-title>\n        </ion-text>\n        <p>{{user?.email ? user?.email : '_'}}</p>\n        <ion-text color=\"primary\">\n          <p class=\"ion-text-capitalize\">Tipo: {{user?.displayName ? user?.displayName : '_'}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"ion-activatable ripple-parent\" (click)=\"upgradeProfile()\"\n     *ngIf=\"user?.displayName !== 'administrador' && userData?.manager\">\n      <ion-label>\n        <h2>Presiona la estrella </h2>\n        <h2>para ser administrador</h2>\n      </ion-label>\n      <ion-button fill=\"clear\" slot=\"end\">\n        <ion-icon size=\"large\" color=\"warning\" name=\"star-outline\"></ion-icon>\n      </ion-button>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-item>\n    <ion-list *ngIf=\"!edit\">\n      <ion-item>\n        <ion-label color=\"dark\" position=\"floating\"> <b>Nombre</b></ion-label>\n        <ion-input value=\"{{userData ? userData.name : ''}}\" type=\"text\" [disabled]=\"true\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"dark\" position=\"floating\"> <b>Apellido</b></ion-label>\n        <ion-input value=\"{{userData ? userData.lastName : ''}}\" type=\"text\" [disabled]=\"true\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"dark\" position='floating'><b>Cumpleaños</b></ion-label>\n        <ion-input value=\"{{userData ? userData.birthDate : ''}}\" type=\"date\" [disabled]=\"true\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <form *ngIf=\"edit\" #email=\"ngForm\" [formGroup]=\"registerForm\" (keydown)=\"EnterSubmit($event, registerForm)\" novalidate>\n      <ion-item>\n        <ion-label color=\"dark\" position=\"floating\"> <b>Nombre</b></ion-label>\n        <ion-input color=\"dark\" formControlName=\"name\" type=\"text\" clearInput=\"true\"></ion-input>\n      </ion-item>\n      <ng-container *ngFor=\"let validation of validationMessages.name\">\n        <div class=\"error-message\" *ngIf=\"registerForm.get('name').hasError(validation.type) && (registerForm.get('name').dirty || registerForm.get('name').touched)\">\n          <ion-text class=\"ion-padding-start\" color=\"danger\"> <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon>  {{ validation.message }}</ion-text>\n        </div>\n      </ng-container>\n    \n      <ion-item>\n        <ion-label color=\"dark\" position=\"floating\"> <b>Apellido</b></ion-label>\n        <ion-input color=\"dark\" formControlName=\"lastName\" type=\"text\" clearInput=\"true\"></ion-input>\n      </ion-item>\n      <ng-container *ngFor=\"let validation of validationMessages.lastName\">\n        <div class=\"error-message\" *ngIf=\"registerForm.get('lastName').hasError(validation.type) && (registerForm.get('lastName').dirty || registerForm.get('lastName').touched)\">\n          <ion-text class=\"ion-padding-start\" color=\"danger\"> <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon>  {{ validation.message }}</ion-text>\n        </div>\n      </ng-container>\n    \n      <ion-item>\n        <ion-label color=\"dark\" position='floating'><b>Cumpleaños</b></ion-label>\n        <ion-input color=\"dark\" formControlName=\"birthday\" type=\"date\" clearInput=\"true\"></ion-input>\n      </ion-item>\n      <ng-container *ngFor=\"let validation of validationMessages.birthday\">\n        <div class=\"error-message\" *ngIf=\"registerForm.get('birthday').hasError(validation.type) && (registerForm.get('birthday').dirty || registerForm.get('birthday').touched)\">\n          <ion-text class=\"ion-padding-start\" color=\"danger\"> <ion-icon class=\"vertical-align\" color=\"danger\" name=\"alert-circle-outline\"> </ion-icon>  {{ validation.message }}</ion-text>\n        </div>\n      </ng-container>\n    </form>\n    <ion-row *ngIf=\"!edit\">\n      <app-big-button class=\"ion-padding-top\"  style=\"width: 100%;\" LABEL=\"EDITAR USUARIO\" buttonType=\"danger\" [loading]=\"loading\" [disabled]=\"false\" (click)=\"editForm()\"></app-big-button>\n    </ion-row>\n    <ion-row *ngIf=\"edit\">\n      <app-big-button class=\"ion-padding-top\"  style=\"width: 100%;\" LABEL=\"GUARDAR\" buttonType=\"danger\" [loading]=\"loading\" [disabled]=\"false\" (click)=\"editForm()\"></app-big-button>\n    </ion-row>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_profile-manager_profile-manager_module_ts.js.map