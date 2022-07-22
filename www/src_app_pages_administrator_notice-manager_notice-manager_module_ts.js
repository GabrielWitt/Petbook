"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_notice-manager_notice-manager_module_ts"],{

/***/ 5673:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/administrator/notice-manager/notice-manager-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeManagerPageRoutingModule": () => (/* binding */ NoticeManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notice_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-manager.page */ 8429);




const routes = [
    {
        path: '',
        component: _notice_manager_page__WEBPACK_IMPORTED_MODULE_0__.NoticeManagerPage
    }
];
let NoticeManagerPageRoutingModule = class NoticeManagerPageRoutingModule {
};
NoticeManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticeManagerPageRoutingModule);



/***/ }),

/***/ 2034:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administrator/notice-manager/notice-manager.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeManagerPageModule": () => (/* binding */ NoticeManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notice_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-manager-routing.module */ 5673);
/* harmony import */ var _notice_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-manager.page */ 8429);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let NoticeManagerPageModule = class NoticeManagerPageModule {
};
NoticeManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _notice_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeManagerPageRoutingModule
        ],
        declarations: [_notice_manager_page__WEBPACK_IMPORTED_MODULE_1__.NoticeManagerPage]
    })
], NoticeManagerPageModule);



/***/ }),

/***/ 8429:
/*!***************************************************************************!*\
  !*** ./src/app/pages/administrator/notice-manager/notice-manager.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeManagerPage": () => (/* binding */ NoticeManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notice_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-manager.page.html?ngResource */ 3376);
/* harmony import */ var _notice_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-manager.page.scss?ngResource */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let NoticeManagerPage = class NoticeManagerPage {
    constructor() { }
    ngOnInit() {
    }
};
NoticeManagerPage.ctorParameters = () => [];
NoticeManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notice-manager',
        template: _notice_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notice_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticeManagerPage);



/***/ }),

/***/ 5972:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administrator/notice-manager/notice-manager.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2UtbWFuYWdlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3376:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administrator/notice-manager/notice-manager.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Anuncios\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_notice-manager_notice-manager_module_ts.js.map