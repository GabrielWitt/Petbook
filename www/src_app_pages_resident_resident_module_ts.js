"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resident_resident_module_ts"],{

/***/ 921:
/*!***********************************************************!*\
  !*** ./src/app/pages/resident/resident-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentPageRoutingModule": () => (/* binding */ ResidentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _resident_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resident.page */ 4421);




const routes = [
    {
        path: '',
        component: _resident_page__WEBPACK_IMPORTED_MODULE_0__.ResidentPage
    }
];
let ResidentPageRoutingModule = class ResidentPageRoutingModule {
};
ResidentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResidentPageRoutingModule);



/***/ }),

/***/ 8604:
/*!***************************************************!*\
  !*** ./src/app/pages/resident/resident.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentPageModule": () => (/* binding */ ResidentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _resident_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resident-routing.module */ 921);
/* harmony import */ var _resident_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resident.page */ 4421);







let ResidentPageModule = class ResidentPageModule {
};
ResidentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resident_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResidentPageRoutingModule
        ],
        declarations: [_resident_page__WEBPACK_IMPORTED_MODULE_1__.ResidentPage]
    })
], ResidentPageModule);



/***/ }),

/***/ 4421:
/*!*************************************************!*\
  !*** ./src/app/pages/resident/resident.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResidentPage": () => (/* binding */ ResidentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resident_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resident.page.html?ngResource */ 9188);
/* harmony import */ var _resident_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resident.page.scss?ngResource */ 1047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ResidentPage = class ResidentPage {
    constructor() { }
    ngOnInit() {
    }
};
ResidentPage.ctorParameters = () => [];
ResidentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-resident',
        template: _resident_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resident_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResidentPage);



/***/ }),

/***/ 1047:
/*!**************************************************************!*\
  !*** ./src/app/pages/resident/resident.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNpZGVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9188:
/*!**************************************************************!*\
  !*** ./src/app/pages/resident/resident.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>resident</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resident_resident_module_ts.js.map