webpackJsonp([2],{

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_document_create_document__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_document_my_document__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_downloaddocument_downloaddocument__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, platform, documentProvider, userProvider, chatProvider, alertCtrl, app, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.documentProvider = documentProvider;
        this.userProvider = userProvider;
        this.chatProvider = chatProvider;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.socket = socket;
        this.loginUser = this.userProvider.userLogin;
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
        this.socket.on("updateListDocument", function (result) {
            _this.dokumen = result['data'];
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.chatProvider.dLeaveDocument();
        if (!this.userProvider.userLogin) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
        else {
            this.getDocument();
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.documentProvider.removeCurrentDocument();
        this.result_timer;
        this.platform.registerBackButtonAction(function () {
            var alert = _this.alertCtrl.create({
                title: 'Confirm',
                message: 'Do you want to exit?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Exit',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    HomePage.prototype.getDocument = function () {
        var _this = this;
        this.documentProvider.getDocument().subscribe(function (result) {
            _this.result_timer = (_this.timer1);
            _this.dokumen = result;
        });
    };
    HomePage.prototype.createDocument = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_create_document_create_document__["a" /* CreateDocumentPage */]);
    };
    HomePage.prototype.myDocument = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_my_document_my_document__["a" /* MyDocumentPage */]);
    };
    HomePage.prototype.logout = function () {
        this.result_timer = (this.timer1);
        this.userProvider.logout();
        this.userProvider.setUser(null);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.downloadDocument = function (title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Insert password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Download',
                    handler: function (data) {
                        var target = { title: title, password: data.password };
                        _this.documentProvider.verificationDocument(target).subscribe(function (result) {
                            console.log(result);
                            if (result) {
                                _this.documentProvider.setCurrentDocument(title);
                                _this.nav = _this.app.getRootNavById('n4');
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_downloaddocument_downloaddocument__["a" /* DownloaddocumentPage */]);
                            }
                            else {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Failed!',
                                    subTitle: 'Password incorrect!',
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.editDocument = function (title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Insert password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        var target = { title: title, password: data.password };
                        _this.documentProvider.verificationDocument(target).subscribe(function (result) {
                            if (result) {
                                _this.documentProvider.setCurrentDocument(title);
                                _this.nav = _this.app.getRootNavById('n4');
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__["a" /* EditPage */]);
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Failed!',
                                    subTitle: 'Password incorrect!',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Home\n     <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n\n<ion-content padding>\n\n  <ion-fab top right edge>\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab (click)="createDocument()"><ion-icon name="add-circle" ></ion-icon></button>\n      <button ion-fab (click)="myDocument()"><ion-icon name="albums" ></ion-icon></button>\n      <button ion-fab (click)="logout()"><ion-icon name="exit" ></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n<ion-row >\n    <ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n        \n  <ion-card *ngFor=\'let data of dokumen\' style=\'border-radius: 5px;\'>\n    <ion-item style=\'background: lightgrey;\'>\n      <h2>{{data.title}}</h2>\n    </ion-item>\n\n    <ion-card-content class=\'konten\'>\n      <h2>Description :</h2>\n      <p class="desc">{{data.desc}}</p>\n      <hr>\n      <ion-row>\n        <ion-col><p class="owner"><ion-icon name="contact"></ion-icon>&ensp;{{data.owner}}</p></ion-col>\n        <ion-col><p class="date">{{data.date}}</p></ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-row style=\'text-align: center;\'>\n      <ion-col col-6>\n        <button ion-button icon-start clear small (click)=\'downloadDocument(data.title)\'>\n          <ion-icon name="cloud-download"></ion-icon>\n          <div>Download</div>\n        </button>\n      </ion-col>\n        \n      <ion-col col-6>\n        <button ion-button icon-start clear small (click)=\'editDocument(data.title)\'>\n          <ion-icon name="create"></ion-icon>\n          <div>Edit</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  </ion-col>\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["Socket"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map