"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_client_client_module_ts"],{

/***/ 7320:
/*!*******************************************************!*\
  !*** ./src/app/pages/client/client-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPageRoutingModule": () => (/* binding */ ClientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.page */ 8952);




const routes = [
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_0__.ClientPage,
        children: [
            {
                path: 'courses',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_client_courses-client_courses-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./courses-client/courses-client.module */ 4018)).then(m => m.CoursesClientPageModule)
            },
            {
                path: 'news',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_client_notices-client_notices-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notices-client/notices-client.module */ 2606)).then(m => m.NoticesClientPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_client_profile-client_profile-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile-client/profile-client.module */ 2579)).then(m => m.ProfileClientPageModule)
            },
            {
                path: 'pets',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_client_pets-client_pets-client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pets-client/pets-client.module */ 1075)).then(m => m.PetsClientPageModule)
            }
        ]
    },
];
let ClientPageRoutingModule = class ClientPageRoutingModule {
};
ClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientPageRoutingModule);



/***/ }),

/***/ 4373:
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPageModule": () => (/* binding */ ClientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-routing.module */ 7320);
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.page */ 8952);







let ClientPageModule = class ClientPageModule {
};
ClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientPageRoutingModule
        ],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_1__.ClientPage]
    })
], ClientPageModule);



/***/ }),

/***/ 8952:
/*!*********************************************!*\
  !*** ./src/app/pages/client/client.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPage": () => (/* binding */ ClientPage)
/* harmony export */ });
/* harmony import */ var _Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.page.html?ngResource */ 3482);
/* harmony import */ var _client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.page.scss?ngResource */ 9977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utilities/attachments.service */ 5909);







let ClientPage = class ClientPage {
  constructor(router, images) {
    this.router = router;
    this.images = images;
  }

  ngOnInit() {}

  checkSavedImages() {
    var _this = this;

    return (0,_Users_gabrielwitt_Desktop_UTPL_Ingenieri_a_de_Software_Petbook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.images.loadSaved().then(photos => {
        if (photos.length) {
          setTimeout(() => {
            _this.router.navigateByUrl(photos[0].route.substring(1));
          }, 1500);
        } else {
          _this.router.navigateByUrl('/client/news');
        }
      }).catch(e => {
        console.log(e);

        _this.router.navigateByUrl('/client/news');
      });
    })();
  }

};

ClientPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_shared_utilities_attachments_service__WEBPACK_IMPORTED_MODULE_3__.AttachmentsService
}];

ClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-client',
  template: _client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClientPage);


/***/ }),

/***/ 9977:
/*!**********************************************************!*\
  !*** ./src/app/pages/client/client.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3482:
/*!**********************************************************!*\
  !*** ./src/app/pages/client/client.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button tab=\"news\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n        <ion-label>ANUNCIOS</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"courses\">\n        <ion-icon name=\"school-outline\"></ion-icon>\n        <ion-label>CURSOS</ion-label>\n      </ion-tab-button> \n      \n      <ion-tab-button tab=\"pets\">\n        <ion-icon name=\"paw-outline\"></ion-icon>\n        <ion-label>MASCOTAS</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"profile\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <ion-label>PERFIL</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client_client_module_ts.js.map