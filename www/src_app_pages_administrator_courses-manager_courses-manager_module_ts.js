"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administrator_courses-manager_courses-manager_module_ts"],{

/***/ 42309:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPageRoutingModule": () => (/* binding */ CoursesManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _courses_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-manager.page */ 43796);




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

/***/ 77790:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPageModule": () => (/* binding */ CoursesManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _courses_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-manager-routing.module */ 42309);
/* harmony import */ var _courses_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-manager.page */ 43796);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








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

/***/ 43796:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesManagerPage": () => (/* binding */ CoursesManagerPage)
/* harmony export */ });
/* harmony import */ var _Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _courses_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-manager.page.html?ngResource */ 57842);
/* harmony import */ var _courses_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-manager.page.scss?ngResource */ 59379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_modules_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/modules/fire-auth.service */ 2687);
/* harmony import */ var src_app_core_services_modules_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/modules/courses.service */ 40267);
/* harmony import */ var src_app_shared_components_course_detail_course_detail_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/course/detail-course/detail-course.component */ 34674);









let CoursesManagerPage = class CoursesManagerPage {
  constructor(auth, courses, modal, routerOutlet) {
    this.auth = auth;
    this.courses = courses;
    this.modal = modal;
    this.routerOutlet = routerOutlet;
    this.loading = true;
    this.loadingColor = false;
    this.loadingList = [1, 2, 3, 4, 5];
    this.CourseCertificate = '../../../../assets/certificate.jpg';
    this.courseList = [];
  }

  ngOnInit() {
    this.loading = true;
    this.auth.checkUser().then(user => {
      this.user = user.user;
      this.userData = user.data;
      this.loadData().then(() => {
        this.loading = false;
      });
    });
  }

  loadData() {
    var _this = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.courseList = yield _this.courses.readCourseList();
        return 'done';
      } catch (error) {
        console.log(error);
      }
    })();
  }

  detailCourse(course) {
    var _this2 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modal.create({
        component: src_app_shared_components_course_detail_course_detail_course_component__WEBPACK_IMPORTED_MODULE_5__.DetailCourseComponent,
        componentProps: {
          course,
          user: _this2.userData
        },
        mode: 'ios',
        presentingElement: _this2.routerOutlet.nativeEl
      });
      modal.present();
      const modalResult = yield modal.onWillDismiss();

      if (modalResult.data) {
        _this2.loadData();
      }
    })();
  }

  doRefresh(refresh) {
    this.loadData().then(done => {
      if (refresh) {
        refresh.target.complete();
      }
    }).catch(error => {
      console.log(error);

      if (refresh) {
        refresh.target.complete();
      }
    });
  }

  reloadData(reload) {
    var _this3 = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this3;

      if (reload) {
        that.courseList = yield that.courses.readCourseList();
      }
    })();
  }

};

CoursesManagerPage.ctorParameters = () => [{
  type: src_app_core_services_modules_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__.FireAuthService
}, {
  type: src_app_core_services_modules_courses_service__WEBPACK_IMPORTED_MODULE_4__.CoursesService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet
}];

CoursesManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-courses-manager',
  template: _courses_manager_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_courses_manager_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CoursesManagerPage);


/***/ }),

/***/ 59379:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLW1hbmFnZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 57842:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/administrator/courses-manager/courses-manager.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<app-main-header title=\"Cursos\" [rightButton]=\"reloadData\"></app-main-header>\n\n\n<ion-content class=\"ion-padding\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" style=\"background-color: gray;\">\n      <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Desliza abajo para refrescar...\" refreshingSpinner=\"dots\"></ion-refresher-content> \n    </ion-refresher>\n\n    <app-not-data-yet-message \n      *ngIf=\"courseList.length == 0 && !loading\"\n      text=\"No hay cursos aún\" icon=\"archive-outline\"\n    ></app-not-data-yet-message>\n  \n    <ion-list *ngIf=\"courseList.length>0\">\n        <ion-item  *ngFor=\"let course of courseList\" (click)=\"detailCourse(course)\">\n            <ion-thumbnail slot=\"start\">\n                <img [src]=\"CourseCertificate\">\n            </ion-thumbnail>\n            <ion-label>{{course.title}}</ion-label>\n        </ion-item>\n    </ion-list>\n    \n    <ion-list *ngIf=\"loading\">\n        <app-loading-view></app-loading-view>\n    </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administrator_courses-manager_courses-manager_module_ts.js.map