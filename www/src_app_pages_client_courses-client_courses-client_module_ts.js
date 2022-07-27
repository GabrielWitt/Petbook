"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_client_courses-client_courses-client_module_ts"],{

/***/ 19987:
/*!******************************************************************************!*\
  !*** ./src/app/pages/client/courses-client/courses-client-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesClientPageRoutingModule": () => (/* binding */ CoursesClientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _courses_client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-client.page */ 75309);




const routes = [
    {
        path: '',
        component: _courses_client_page__WEBPACK_IMPORTED_MODULE_0__.CoursesClientPage
    }
];
let CoursesClientPageRoutingModule = class CoursesClientPageRoutingModule {
};
CoursesClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursesClientPageRoutingModule);



/***/ }),

/***/ 94018:
/*!**********************************************************************!*\
  !*** ./src/app/pages/client/courses-client/courses-client.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesClientPageModule": () => (/* binding */ CoursesClientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _courses_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-client-routing.module */ 19987);
/* harmony import */ var _courses_client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-client.page */ 75309);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let CoursesClientPageModule = class CoursesClientPageModule {
};
CoursesClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _courses_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursesClientPageRoutingModule
        ],
        declarations: [_courses_client_page__WEBPACK_IMPORTED_MODULE_1__.CoursesClientPage]
    })
], CoursesClientPageModule);



/***/ }),

/***/ 75309:
/*!********************************************************************!*\
  !*** ./src/app/pages/client/courses-client/courses-client.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesClientPage": () => (/* binding */ CoursesClientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _courses_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-client.page.html?ngResource */ 83379);
/* harmony import */ var _courses_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-client.page.scss?ngResource */ 14446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let CoursesClientPage = class CoursesClientPage {
    constructor() { }
    ngOnInit() {
    }
};
CoursesClientPage.ctorParameters = () => [];
CoursesClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-courses-client',
        template: _courses_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_courses_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursesClientPage);



/***/ }),

/***/ 14446:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/courses-client/courses-client.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLWNsaWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 83379:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/courses-client/courses-client.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Mis Cursos\"></app-main-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client_courses-client_courses-client_module_ts.js.map