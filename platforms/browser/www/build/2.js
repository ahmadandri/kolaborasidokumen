webpackJsonp([2],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdocumentPageModule", function() { return EditdocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editdocument__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditdocumentPageModule = /** @class */ (function () {
    function EditdocumentPageModule() {
    }
    EditdocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editdocument__["a" /* EditdocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editdocument__["a" /* EditdocumentPage */]),
            ],
        })
    ], EditdocumentPageModule);
    return EditdocumentPageModule;
}());

//# sourceMappingURL=editdocument.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditdocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_chat_chat__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditdocumentPage = /** @class */ (function () {
    function EditdocumentPage(navCtrl, navParams, location, app, userProvider, chatProvider, platform, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.location = location;
        this.app = app;
        this.userProvider = userProvider;
        this.chatProvider = chatProvider;
        this.platform = platform;
        this.socket = socket;
        this.options = {
            charCounterCount: true,
            toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
            events: {}
        };
        this.platform.registerBackButtonAction(function () {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
        this.socket.on('getData', function (result) {
            _this.title = result[0].title;
        });
    }
    EditdocumentPage.prototype.back = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__["a" /* Tab1Page */]);
        this.chatProvider.dLeaveDocument();
    };
    EditdocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.location.onPopState(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
        if (!this.userProvider.userLogin) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    EditdocumentPage.prototype.edit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__["a" /* EditPage */]);
    };
    EditdocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editdocument',template:/*ion-inline-start:"C:\Framework\ionic\dokumen\src\pages\editdocument\editdocument.html"*/'\n  Generated template for the EditdocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n      </ion-buttons>\n    <ion-title #slideItem>Edit Document</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n  	<div class="sample">\n      <h2>Sample 11: Add Custom Button</h2>\n      <button (click)="edit()">Edit</button>\n  </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Framework\ionic\dokumen\src\pages\editdocument\editdocument.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* PlatformLocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"]])
    ], EditdocumentPage);
    return EditdocumentPage;
}());

//# sourceMappingURL=editdocument.js.map

/***/ })

});
//# sourceMappingURL=2.js.map