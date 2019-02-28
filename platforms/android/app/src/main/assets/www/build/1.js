webpackJsonp([1],{

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineuserPageModule", function() { return OnlineuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onlineuser__ = __webpack_require__(814);
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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatprivate_chatprivate__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
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
    function OnlineuserPage(navCtrl, navParams, userProvider, app, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.app = app;
        this.socket = socket;
        this.allUser = [];
        this.onlineUser = [];
        this.user = "alluser";
        this.socket.on('newUser', function () {
            _this.getUser();
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
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
            selector: 'page-onlineuser',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\onlineuser\onlineuser.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>User\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="user">\n      <ion-segment-button value="alluser">\n        All User\n      </ion-segment-button>\n      <ion-segment-button value="onlineuser">\n        Online User\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<ion-row >\n  <ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n\n  <div [ngSwitch]="user">\n    <ion-list *ngSwitchCase="\'alluser\'">\n      <div *ngFor="let data of allUser">\n      <ion-item *ngIf="data.username!==loginUser" no-lines>\n          <ion-icon color="primary" name="contact" style="margin-right:15px"></ion-icon><span class="username"  (click)="chat(data.username)">{{data.username}}</span>\n      </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'onlineuser\'">\n      <div *ngFor="let item of onlineUser">\n          <ion-item *ngIf="item!==loginUser" >\n              <ion-icon name="contact"></ion-icon><span class="username" (click)="chat(item)">{{item}}</span>\n          </ion-item>\n\n      </div>\n            	\n    </ion-list>\n\n  </div>\n  \n</ion-col>\n</ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\onlineuser\onlineuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"]])
    ], OnlineuserPage);
    return OnlineuserPage;
}());

//# sourceMappingURL=onlineuser.js.map

/***/ })

});
//# sourceMappingURL=1.js.map