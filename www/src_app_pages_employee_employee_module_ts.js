"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_employee_employee_module_ts"],{

/***/ 7786:
/*!***********************************************************!*\
  !*** ./src/app/pages/employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageRoutingModule": () => (/* binding */ EmployeePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page */ 8613);




const routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_0__.EmployeePage
    }
];
let EmployeePageRoutingModule = class EmployeePageRoutingModule {
};
EmployeePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeePageRoutingModule);



/***/ }),

/***/ 3354:
/*!***************************************************!*\
  !*** ./src/app/pages/employee/employee.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePageModule": () => (/* binding */ EmployeePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 7786);
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page */ 8613);







let EmployeePageModule = class EmployeePageModule {
};
EmployeePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeePageRoutingModule
        ],
        declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_1__.EmployeePage]
    })
], EmployeePageModule);



/***/ }),

/***/ 8613:
/*!*************************************************!*\
  !*** ./src/app/pages/employee/employee.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePage": () => (/* binding */ EmployeePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _employee_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.page.html?ngResource */ 1872);
/* harmony import */ var _employee_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.page.scss?ngResource */ 2626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EmployeePage = class EmployeePage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeePage.ctorParameters = () => [];
EmployeePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-employee',
        template: _employee_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeePage);



/***/ }),

/***/ 2626:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1872:
/*!**************************************************************!*\
  !*** ./src/app/pages/employee/employee.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>employee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee_employee_module_ts.js.map