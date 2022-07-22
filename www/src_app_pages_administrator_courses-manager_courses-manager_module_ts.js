"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_courses-manager_courses-manager_module_ts"],{

/***/ 2309:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPageRoutingModule": () => (/* binding */ CoursesManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _courses_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-manager.page */ 3796);




const routes = [
    {
        path: '',
        component: _courses_manager_page__WEBPACK_IMPORTED_MODULE_0__.CoursesManagerPage
    }
];
let CoursesManagerPageRoutingModule = class CoursesManagerPageRoutingModule {
};
CoursesManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursesManagerPageRoutingModule);



/***/ }),

/***/ 7790:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPageModule": () => (/* binding */ CoursesManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _courses_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-manager-routing.module */ 2309);
/* harmony import */ var _courses_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-manager.page */ 3796);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let CoursesManagerPageModule = class CoursesManagerPageModule {
};
CoursesManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _courses_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursesManagerPageRoutingModule
        ],
        declarations: [_courses_manager_page__WEBPACK_IMPORTED_MODULE_1__.CoursesManagerPage]
    })
], CoursesManagerPageModule);



/***/ }),

/***/ 3796:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPage": () => (/* binding */ CoursesManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _courses_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-manager.page.html?ngResource */ 7842);
/* harmony import */ var _courses_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-manager.page.scss?ngResource */ 9379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CoursesManagerPage = class CoursesManagerPage {
    constructor() { }
    ngOnInit() {
    }
};
CoursesManagerPage.ctorParameters = () => [];
CoursesManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-courses-manager',
        template: _courses_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_courses_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursesManagerPage);



/***/ }),

/***/ 9379:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLW1hbmFnZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7842:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Cursos\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_courses-manager_courses-manager_module_ts.js.map