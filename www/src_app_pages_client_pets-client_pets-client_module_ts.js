"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_client_pets-client_pets-client_module_ts"],{

/***/ 753:
/*!************************************************************************!*\
  !*** ./src/app/pages/client/pets-client/pets-client-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetsClientPageRoutingModule": () => (/* binding */ PetsClientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pets_client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pets-client.page */ 7735);




const routes = [
    {
        path: '',
        component: _pets_client_page__WEBPACK_IMPORTED_MODULE_0__.PetsClientPage
    }
];
let PetsClientPageRoutingModule = class PetsClientPageRoutingModule {
};
PetsClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PetsClientPageRoutingModule);



/***/ }),

/***/ 1075:
/*!****************************************************************!*\
  !*** ./src/app/pages/client/pets-client/pets-client.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetsClientPageModule": () => (/* binding */ PetsClientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pets_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pets-client-routing.module */ 753);
/* harmony import */ var _pets_client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pets-client.page */ 7735);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let PetsClientPageModule = class PetsClientPageModule {
};
PetsClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _pets_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.PetsClientPageRoutingModule
        ],
        declarations: [_pets_client_page__WEBPACK_IMPORTED_MODULE_1__.PetsClientPage]
    })
], PetsClientPageModule);



/***/ }),

/***/ 7735:
/*!**************************************************************!*\
  !*** ./src/app/pages/client/pets-client/pets-client.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetsClientPage": () => (/* binding */ PetsClientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pets_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pets-client.page.html?ngResource */ 2086);
/* harmony import */ var _pets_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pets-client.page.scss?ngResource */ 4575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PetsClientPage = class PetsClientPage {
    constructor() { }
    ngOnInit() {
    }
};
PetsClientPage.ctorParameters = () => [];
PetsClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pets-client',
        template: _pets_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pets_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PetsClientPage);



/***/ }),

/***/ 4575:
/*!***************************************************************************!*\
  !*** ./src/app/pages/client/pets-client/pets-client.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXRzLWNsaWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2086:
/*!***************************************************************************!*\
  !*** ./src/app/pages/client/pets-client/pets-client.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Mis Mascotas\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client_pets-client_pets-client_module_ts.js.map