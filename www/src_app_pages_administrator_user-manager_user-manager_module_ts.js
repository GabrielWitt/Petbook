"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_user-manager_user-manager_module_ts"],{

/***/ 3216:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/administrator/user-manager/user-manager-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagerPageRoutingModule": () => (/* binding */ UserManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-manager.page */ 648);




const routes = [
    {
        path: '',
        component: _user_manager_page__WEBPACK_IMPORTED_MODULE_0__.UserManagerPage
    }
];
let UserManagerPageRoutingModule = class UserManagerPageRoutingModule {
};
UserManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserManagerPageRoutingModule);



/***/ }),

/***/ 2913:
/*!*************************************************************************!*\
  !*** ./src/app/pages/administrator/user-manager/user-manager.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagerPageModule": () => (/* binding */ UserManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-manager-routing.module */ 3216);
/* harmony import */ var _user_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-manager.page */ 648);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let UserManagerPageModule = class UserManagerPageModule {
};
UserManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _user_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserManagerPageRoutingModule
        ],
        declarations: [_user_manager_page__WEBPACK_IMPORTED_MODULE_1__.UserManagerPage]
    })
], UserManagerPageModule);



/***/ }),

/***/ 648:
/*!***********************************************************************!*\
  !*** ./src/app/pages/administrator/user-manager/user-manager.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagerPage": () => (/* binding */ UserManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-manager.page.html?ngResource */ 5468);
/* harmony import */ var _user_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-manager.page.scss?ngResource */ 5731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UserManagerPage = class UserManagerPage {
    constructor() { }
    ngOnInit() {
    }
};
UserManagerPage.ctorParameters = () => [];
UserManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-manager',
        template: _user_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserManagerPage);



/***/ }),

/***/ 5731:
/*!************************************************************************************!*\
  !*** ./src/app/pages/administrator/user-manager/user-manager.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5468:
/*!************************************************************************************!*\
  !*** ./src/app/pages/administrator/user-manager/user-manager.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Usuarios\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_user-manager_user-manager_module_ts.js.map