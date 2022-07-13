"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manager_home-manager_home-manager_module_ts"],{

/***/ 3292:
/*!***************************************************************************!*\
  !*** ./src/app/pages/manager/home-manager/home-manager-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeManagerPageRoutingModule": () => (/* binding */ HomeManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-manager.page */ 6978);




const routes = [
    {
        path: '',
        component: _home_manager_page__WEBPACK_IMPORTED_MODULE_0__.HomeManagerPage
    }
];
let HomeManagerPageRoutingModule = class HomeManagerPageRoutingModule {
};
HomeManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeManagerPageRoutingModule);



/***/ }),

/***/ 8415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/manager/home-manager/home-manager.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeManagerPageModule": () => (/* binding */ HomeManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-manager-routing.module */ 3292);
/* harmony import */ var _home_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-manager.page */ 6978);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let HomeManagerPageModule = class HomeManagerPageModule {
};
HomeManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeManagerPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_home_manager_page__WEBPACK_IMPORTED_MODULE_1__.HomeManagerPage]
    })
], HomeManagerPageModule);



/***/ }),

/***/ 6978:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manager/home-manager/home-manager.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeManagerPage": () => (/* binding */ HomeManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-manager.page.html?ngResource */ 1337);
/* harmony import */ var _home_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-manager.page.scss?ngResource */ 4686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomeManagerPage = class HomeManagerPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeManagerPage.ctorParameters = () => [];
HomeManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-manager',
        template: _home_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeManagerPage);



/***/ }),

/***/ 4686:
/*!******************************************************************************!*\
  !*** ./src/app/pages/manager/home-manager/home-manager.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW1hbmFnZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1337:
/*!******************************************************************************!*\
  !*** ./src/app/pages/manager/home-manager/home-manager.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>homeManager</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manager_home-manager_home-manager_module_ts.js.map