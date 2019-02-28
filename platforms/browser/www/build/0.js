webpackJsonp([0],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineuserPageModule", function() { return OnlineuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onlineuser__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnlineuserPageModule = /** @class */ (function () {
    function OnlineuserPageModule() {
    }
    OnlineuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onlineuser__["a" /* OnlineuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onlineuser__["a" /* OnlineuserPage */]),
            ],
        })
    ], OnlineuserPageModule);
    return OnlineuserPageModule;
}());

//# sourceMappingURL=onlineuser.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatprivate_chatprivate__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
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
 * Generated class for the OnlineuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnlineuserPage = /** @class */ (function () {
    function OnlineuserPage(navCtrl, navParams, userProvider, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.app = app;
        this.url = 'http://192.168.43.119:2000';
        this.allUser = [];
        this.onlineUser = [];
        this.user = "alluser";
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__(this.url);
        this.socket.on('newUser', function () {
            _this.getUser();
        });
    }
    OnlineuserPage.prototype.ionViewWillEnter = function () {
        console.log(this.userProvider.userLogin);
        if (!this.userProvider.userLogin) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            this.allUser = [];
            this.onlineUser = [];
        }
        else {
            this.getUser();
        }
    };
    OnlineuserPage.prototype.getUser = function () {
        var _this = this;
        this.userProvider.getAllUser().subscribe(function (result) {
            _this.allUser = result['user'];
            _this.onlineUser = result['online'];
        });
        this.loginUser = this.userProvider.userLogin;
    };
    OnlineuserPage.prototype.chat = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chatprivate_chatprivate__["a" /* ChatprivatePage */], { target: data });
    };
    OnlineuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-onlineuser',template:/*ion-inline-start:"C:\Framework\ionic\dokumen\src\pages\onlineuser\onlineuser.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      User\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="user">\n      <ion-segment-button value="alluser">\n        All User\n      </ion-segment-button>\n      <ion-segment-button value="onlineuser">\n        Online User\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="user">\n    <ion-list *ngSwitchCase="\'alluser\'">\n      <div *ngFor="let data of allUser">\n      <ion-item *ngIf="data.username!==loginUser">\n        <div class="username"  (click)="chat(data.username)">{{data.username}}</div>\n      </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'onlineuser\'">\n      <div *ngFor="let item of onlineUser">\n          <ion-item *ngIf="item!==loginUser" >\n            <div class="username" (click)="chat(item)">{{item}}</div>\n          </ion-item>\n\n      </div>\n            	\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Framework\ionic\dokumen\src\pages\onlineuser\onlineuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], OnlineuserPage);
    return OnlineuserPage;
}());

//# sourceMappingURL=onlineuser.js.map

/***/ })

});
//# sourceMappingURL=0.js.map