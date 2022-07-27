"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_client_notices-client_notices-client_module_ts"],{

/***/ 64894:
/*!******************************************************************************!*\
  !*** ./src/app/pages/client/notices-client/notices-client-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticesClientPageRoutingModule": () => (/* binding */ NoticesClientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notices_client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices-client.page */ 7017);




const routes = [
    {
        path: '',
        component: _notices_client_page__WEBPACK_IMPORTED_MODULE_0__.NoticesClientPage
    }
];
let NoticesClientPageRoutingModule = class NoticesClientPageRoutingModule {
};
NoticesClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticesClientPageRoutingModule);



/***/ }),

/***/ 92606:
/*!**********************************************************************!*\
  !*** ./src/app/pages/client/notices-client/notices-client.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticesClientPageModule": () => (/* binding */ NoticesClientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notices_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices-client-routing.module */ 64894);
/* harmony import */ var _notices_client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notices-client.page */ 7017);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let NoticesClientPageModule = class NoticesClientPageModule {
};
NoticesClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _notices_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticesClientPageRoutingModule
        ],
        declarations: [_notices_client_page__WEBPACK_IMPORTED_MODULE_1__.NoticesClientPage]
    })
], NoticesClientPageModule);



/***/ }),

/***/ 7017:
/*!********************************************************************!*\
  !*** ./src/app/pages/client/notices-client/notices-client.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticesClientPage": () => (/* binding */ NoticesClientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notices_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices-client.page.html?ngResource */ 85014);
/* harmony import */ var _notices_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notices-client.page.scss?ngResource */ 22090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let NoticesClientPage = class NoticesClientPage {
    constructor() { }
    ngOnInit() {
    }
};
NoticesClientPage.ctorParameters = () => [];
NoticesClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notices-client',
        template: _notices_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notices_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticesClientPage);



/***/ }),

/***/ 22090:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/notices-client/notices-client.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2VzLWNsaWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 85014:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/notices-client/notices-client.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Anuncios\"></app-main-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client_notices-client_notices-client_module_ts.js.map