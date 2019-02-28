webpackJsonp([14],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(socket) {
        this.socket = socket;
        console.log('Hello ChatProvider Provider');
    }
    ChatProvider.prototype.pSendMessage = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('pSendMessage', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    ChatProvider.prototype.pGetMessage = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('pGetMessage', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    ChatProvider.prototype.dSendMessage = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('dSendMessage', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    ChatProvider.prototype.dGetMessage = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('dGetMessage', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    ChatProvider.prototype.dLeaveDocument = function () {
        this.socket.emit('leaveDocument');
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__ = __webpack_require__(44);
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
 * Generated class for the CreateDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateDocumentPage = /** @class */ (function () {
    function CreateDocumentPage(navCtrl, navParams, document, user, alertCtrl, platform, socket, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.socket = socket;
        this.app = app;
        this.title = '';
        this.password = '';
        this.description = '';
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    CreateDocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateDocumentPage');
        this.owner = this.user.userLogin;
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
    };
    CreateDocumentPage.prototype.createDocument = function () {
        var _this = this;
        this.result_timer = (this.timer1);
        var data = { title: this.title, password: this.password, description: this.description, owner: this.owner };
        this.document.createDocument(data).subscribe(function (result) {
            if (result) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Document created!',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Failed',
                    subTitle: 'Document already taken',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
            _this.result_timer = (_this.timer1);
        });
    };
    CreateDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-document',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\create-document\create-document.html"*/'<!--\n  Generated template for the CreateDocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Document\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label color="primary" floating>Title</ion-label>\n			<ion-input type="text" [(ngModel)]=\'title\'></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label color="primary" floating>Password</ion-label>\n			<ion-input type="text" [(ngModel)]=\'password\'></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label color="primary" floating>Description</ion-label>\n			<ion-input maxlength=\'50\' [(ngModel)]=\'description\'></ion-input>\n		</ion-item>\n		<ion-item>\n			<button ion-button (click)=\'createDocument()\' [disabled]="title===\'\'||password===\'\'||description===\'\'">Create</button>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\create-document\create-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CreateDocumentPage);
    return CreateDocumentPage;
}());

//# sourceMappingURL=create-document.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloaddocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tab1_tab1__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import JQuery from 'jquery'






/**
 * Generated class for the DownloaddocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloaddocumentPage = /** @class */ (function () {
    function DownloaddocumentPage(navCtrl, navParams, file, fileOpener, platform, alertCtrl, location, app, socket, document) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.app = app;
        this.socket = socket;
        this.document = document;
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    DownloaddocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DownloaddocumentPage');
        var title = this.document.currentDocument;
        this.document.getTextDocument(title).subscribe(function (result) {
            $('#Html2Pdf').append(result[0].text);
        });
        this.location.onPopState(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
    };
    DownloaddocumentPage.prototype.ionViewWillLeave = function () {
        this.document.removeCurrentDocument();
    };
    DownloaddocumentPage.prototype.back = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tab1_tab1__["a" /* Tab1Page */]);
    };
    DownloaddocumentPage.prototype.generatePdf = function () {
        var _this = this;
        this.result_timer = (this.timer1);
        var div = document.getElementById("Html2Pdf");
        var options = { background: "red", height: 900, width: 700 };
        __WEBPACK_IMPORTED_MODULE_3_html2canvas__(div, options).then(function (canvas) {
            //Initialize JSPDF
            var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf__("p", "mm", "f4");
            //Converting canvas to Image
            var imgData = canvas.toDataURL("image/PNG");
            //Add image Canvas to PDF
            doc.addImage(imgData, 'PNG', 20, 20);
            var pdfOutput = doc.output();
            // using ArrayBuffer will allow you to put image inside PDF
            var buffer = new ArrayBuffer(pdfOutput.length);
            var array = new Uint8Array(buffer);
            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }
            //This is where the PDF file will stored , you can change it as you like
            // for more information please visit https://ionicframework.com/docs/native/file/
            if (_this.platform.is('core') || _this.platform.is('mobileweb')) {
                console.log(_this.platform.is('mobileweb'));
                console.log(_this.platform.is('core'));
                doc.save(_this.fileName + '.pdf');
                _this.result_timer = (_this.timer1);
            }
            else {
                var directory = _this.file.externalApplicationStorageDirectory;
                //Name of pdf
                var fileName = _this.fileName + ".pdf";
                //Writing File to Device
                _this.file.writeFile(directory, fileName, buffer)
                    .then(function (success) {
                    _this.result_timer = (_this.timer1);
                    var alert = _this.alertCtrl.create({
                        title: 'Success',
                        subTitle: 'PDF downloaded!',
                        buttons: ['Ok']
                    });
                    alert.present();
                })
                    .catch(function (error) {
                    _this.result_timer = (_this.timer1);
                    JSON.stringify(error);
                    var alert = _this.alertCtrl.create({
                        title: 'Filed',
                        subTitle: 'File name already exist!',
                        buttons: ['Ok']
                    });
                    alert.present();
                });
            }
            _this.result_timer = (_this.timer1);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('one'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DownloaddocumentPage.prototype, "d1", void 0);
    DownloaddocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-downloaddocument',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\downloaddocument\downloaddocument.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n      </ion-buttons>\n\n    <ion-title>Download\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n   <ion-item>\n      <ion-label floating >File Name : </ion-label>\n     <ion-input type="" [(ngModel)]="fileName" ></ion-input>\n   </ion-item>\n  <button ion-button (click)="generatePdf()" [disabled]="!fileName">Create PDF</button>\n</ion-content>\n<div id="Html2Pdf">\n</div>'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\downloaddocument\downloaddocument.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* PlatformLocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_8__providers_document_document__["a" /* DocumentProvider */]])
    ], DownloaddocumentPage);
    return DownloaddocumentPage;
}());

//# sourceMappingURL=downloaddocument.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(36);
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
 * Generated class for the ChatdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatdocumentPage = /** @class */ (function () {
    function ChatdocumentPage(navCtrl, navParams, chat, user, document, socket, location, app, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.user = user;
        this.document = document;
        this.socket = socket;
        this.location = location;
        this.app = app;
        this.platform = platform;
        this.messages = [];
        this.message = '';
        this.to = this.document.currentDocument;
        this.from = this.user.userLogin;
        this.socket.on('dUpdateMessage', function (result) {
            _this.messages.push(result);
            _this.result_timer = (_this.timer1);
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    ChatdocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loginUser = this.user.userLogin;
        console.log(this.user.userLogin);
        if (!this.user.userLogin) {
            this.nav = this.app.getRootNavById('n4');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
        else {
            this.chat.dGetMessage(this.to).subscribe(function (result) {
                for (var i = Object.keys(result).length - 1; i >= 0; i--) {
                    _this.messages.push(result[i]);
                }
            });
        }
        this.location.onPopState(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__["a" /* EditPage */]);
        });
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    ChatdocumentPage.prototype.back = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_edit_edit__["a" /* EditPage */]);
    };
    ChatdocumentPage.prototype.sendMessage = function () {
        var _this = this;
        this.result_timer = (this.timer1);
        var data = { text: this.message, to: this.to, from: this.from };
        this.message = '';
        this.chat.dSendMessage(data).subscribe(function (result) {
            _this.messages.push(result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatdocumentPage.prototype, "content", void 0);
    ChatdocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatdocument',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\chatdocument\chatdocument.html"*/'<!--\n  Generated template for the ChatdocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n      </ion-buttons>\n      \n    <ion-title>Chat : {{to}}\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n		<ion-row >\n				<ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n					<ion-grid>\n						<ion-row *ngFor="let message of messages">\n							<ion-col col-9 *ngIf="message.from!==loginUser" class="message" [ngClass]="{\'my_message\':message.from===loginUser, \'other_message\':message.from!== loginUser}">\n								<span class="user_name">{{message.from}}</span><br>\n								<span>{{message.text}}</span>\n								<div class="time">{{message.created}}</div>\n							</ion-col>\n\n							<ion-col offset-3 col-9 *ngIf="message.from===loginUser" class="message" [ngClass]="{\'my_message\':message.from===loginUser, \'other_message\':message.from!== loginUser}">\n								<span class="user_name">{{message.from}}</span><br>\n								<span>{{message.text}}</span>\n								<div class="time">{{message.created}}</div>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</ion-col>\n			</ion-row>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-row class="message_row">\n			<ion-col col-9>\n				<ion-item no-lines>\n					<ion-input type="text" [(ngModel)]="message"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-3>\n				<button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message ===\'\'">Send</button>\n			</ion-col>\n		</ion-row>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\chatdocument\chatdocument.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["h" /* PlatformLocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ChatdocumentPage);
    return ChatdocumentPage;
}());

//# sourceMappingURL=chatdocument.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
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
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, userProvider, alertCtrl, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.username = '';
        this.password1 = '';
        this.password2 = '';
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistrationPage');
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    };
    RegistrationPage.prototype.registration = function () {
        var _this = this;
        console.log('registrasi');
        this.result_timer = this.timer1;
        var data = { username: this.username, password1: this.password1, password2: this.password2 };
        if (this.password1.length < 6 || this.password2.length < 6) {
            var alert_1 = this.alertCtrl.create({
                title: 'Registration Failed',
                subTitle: 'Minimum password 6 character',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (this.password1 !== this.password2) {
            var alert_2 = this.alertCtrl.create({
                title: 'Registration Failed',
                subTitle: 'Please check your input',
                buttons: ['Dismiss']
            });
            alert_2.present();
        }
        else {
            this.userProvider.registration(data).subscribe(function (result) {
                console.log(result);
                _this.result_timer = _this.timer1;
                if (result) {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Registration',
                        subTitle: 'Success',
                        buttons: ['Dismiss']
                    });
                    alert_3.present();
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Registration Failed',
                        subTitle: 'Username already taken',
                        buttons: ['Dismiss']
                    });
                    alert_4.present();
                }
            });
        }
    };
    RegistrationPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\registration\registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registration\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row >\n      <ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text" [(ngModel)]=\'username\'></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]=\'password1\'></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Confirm</ion-label>\n            <ion-input type="password" [(ngModel)]=\'password2\'></ion-input>\n          </ion-item>\n\n        <div padding>\n          <button ion-button block (click)=\'registration()\' [disabled]="username===\'\'||password1===\'\'||password2===\'\'">Registration</button>\n        </div>\n\n        <div padding>\n          <button ion-button block clear (click)=\'login()\'>Login In</button>\n        </div>\n\n      </ion-col>\n    </ion-row> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_document_document__ = __webpack_require__(45);
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
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogPage = /** @class */ (function () {
    function LogPage(navCtrl, navParams, platform, location, app, socket, document) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.location = location;
        this.app = app;
        this.socket = socket;
        this.document = document;
        this.current = this.document.currentDocument;
        this.socket.on('updateLog', function (data) {
            _this.getLog(_this.current);
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    LogPage.prototype.ionViewWillEnter = function () {
        this.current = this.document.currentDocument;
    };
    LogPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getLog(this.current);
        this.location.onPopState(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
        });
    };
    LogPage.prototype.back = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
    };
    LogPage.prototype.getLog = function (data) {
        var _this = this;
        this.document.getLog(data).subscribe(function (result) {
            _this.data = result;
            _this.result_timer = (_this.timer1);
        });
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\log\log.html"*/'<!--\n  Generated template for the LogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons left>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n      </ion-buttons>\n    <ion-title>Log\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor=\'let result of data\'>\n		<div id=line>\n			\n		</div>\n		<span>\n			<h2>{{result.editor}}</h2>\n			<h3>Edited document</h3>\n			<p>{{result.create}}</p>\n		</span>\n		\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\log\log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* PlatformLocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_5__providers_document_document__["a" /* DocumentProvider */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chatdocument/chatdocument.module": [
		798,
		13
	],
	"../pages/chatprivate/chatprivate.module": [
		799,
		12
	],
	"../pages/create-document/create-document.module": [
		800,
		11
	],
	"../pages/downloaddocument/downloaddocument.module": [
		801,
		10
	],
	"../pages/edit/edit.module": [
		802,
		9
	],
	"../pages/editdocument/editdocument.module": [
		803,
		3
	],
	"../pages/home/home.module": [
		804,
		2
	],
	"../pages/log/log.module": [
		805,
		8
	],
	"../pages/login/login.module": [
		806,
		7
	],
	"../pages/my-document/my-document.module": [
		807,
		6
	],
	"../pages/onlineuser/onlineuser.module": [
		808,
		1
	],
	"../pages/registration/registration.module": [
		809,
		5
	],
	"../pages/tab1/tab1.module": [
		810,
		4
	],
	"../pages/tab2/tab2.module": [
		811,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { OnlineuserPage } from '../../pages/onlineuser/onlineuser'
//import * as io from "socket.io-client";
/*
import
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(socket) {
        this.socket = socket;
        //this.socket = io('http://documentserver.herokuapp.com:80/');
    }
    UserProvider.prototype.setUser = function (data) {
        this.userLogin = data;
    };
    UserProvider.prototype.login = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('login', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    UserProvider.prototype.registration = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('registration', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    UserProvider.prototype.getAllUser = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getAllUser', ({ data: '' }), function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    UserProvider.prototype.getOnlineUser = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getOnlineUser', ({ data: '' }), function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    UserProvider.prototype.logout = function () {
        this.socket.emit('logout', ({ data: '' }));
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatprivatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__ = __webpack_require__(44);
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






//import JQuery from 'jquery'
/**
 * Generated class for the ChatprivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatprivatePage = /** @class */ (function () {
    function ChatprivatePage(navCtrl, navParams, platform, app, chat, user, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.app = app;
        this.chat = chat;
        this.user = user;
        this.socket = socket;
        this.messages = [];
        this.message = '';
        this.from = this.user.userLogin;
        this.socket.on('pUpdateMessage', function (data) {
            _this.messages.push(data);
            _this.result_timer = (_this.timer1);
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    ChatprivatePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.to = this.navParams.get('target');
        this.chat.pGetMessage({ to: this.to, from: this.from }).subscribe(function (result) {
            for (var i = Object.keys(result).length - 1; i >= 0; i--) {
                _this.messages.push(result[i]);
            }
        });
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
    };
    ChatprivatePage.prototype.sendMessage = function () {
        var _this = this;
        this.result_timer = (this.timer1);
        var data = { text: this.message, to: this.to, from: this.from };
        this.chat.pSendMessage(data).subscribe(function (result) {
            _this.messages.push(result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatprivatePage.prototype, "content", void 0);
    ChatprivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatprivate',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\chatprivate\chatprivate.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>To : {{to}}\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n	<ion-row >\n		<ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n			<ion-grid #scrollMe>\n			<ion-row *ngFor="let message of messages">\n				<!-- Pesan dari orang lain -->\n				<ion-col col-9 *ngIf="message.from!==from" class="message" [ngClass]="{\'my_message\':message.from===from, \'other_message\':message.from!== from}">\n					<span class="user_name">{{message.from}}</span><br>\n					<span>{{message.text}}</span>\n					<div class="time">{{message.created }}</div>\n				</ion-col>\n\n				<!-- Pesan anda-->\n				<ion-col offset-3 col-9 *ngIf="message.from===from" class="message" [ngClass]="{\'my_message\':message.from===from, \'other_message\':message.from!== from}">\n					<span class="user_name">You</span><br>\n					<span>{{message.text}}</span>\n					<div class="time">{{message.created }}</div>\n				</ion-col>\n			</ion-row>\n			</ion-grid>\n		</ion-col>\n	</ion-row>		\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-row class="message_row">\n			<ion-col col-9>\n				<ion-item no-lines>\n					<ion-input type="text" [(ngModel)]="message"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-3>\n				<button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message ===\'\'">Send</button>\n			</ion-col>\n		</ion-row>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\chatprivate\chatprivate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"]])
    ], ChatprivatePage);
    return ChatprivatePage;
}());

//# sourceMappingURL=chatprivate.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_create_document_create_document__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_downloaddocument_downloaddocument__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tab1_tab1__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';










/**
 * Generated class for the MyDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyDocumentPage = /** @class */ (function () {
    function MyDocumentPage(navCtrl, navParams, alertCtrl, document, user, app, socket, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.document = document;
        this.user = user;
        this.app = app;
        this.socket = socket;
        this.platform = platform;
        this.socket.on('updateListMyDocument', function (data) {
            console.log(data);
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    MyDocumentPage_1 = MyDocumentPage;
    MyDocumentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loginUser = this.user.userLogin;
        if (!this.user.userLogin) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
            this.mydocument;
        }
        else {
            this.document.getMyDocument(this.loginUser).subscribe(function (result) {
                _this.mydocument = result;
            });
        }
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
    };
    //fungsi untuk membuat dokumen
    MyDocumentPage.prototype.createDocument = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_create_document_create_document__["a" /* CreateDocumentPage */]);
    };
    //fungsi menuju my document
    MyDocumentPage.prototype.myDocument = function () {
        this.navCtrl.push(MyDocumentPage_1);
    };
    //fungsi untuk melakukan logout
    MyDocumentPage.prototype.logout = function () {
        this.user.logout();
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    //fungsi untuk mendownload Dokumen
    MyDocumentPage.prototype.downloadDocument = function (title) {
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
                        _this.document.verificationDocument(target).subscribe(function (result) {
                            console.log(result);
                            if (result) {
                                _this.document.setCurrentDocument(title);
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_downloaddocument_downloaddocument__["a" /* DownloaddocumentPage */]);
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
    //fungsi untuk melakukan edit dokumen
    MyDocumentPage.prototype.editDocument = function (title) {
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
                        _this.document.verificationDocument(target).subscribe(function (result) {
                            console.log(result);
                            if (result) {
                                _this.document.setCurrentDocument(title);
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_edit_edit__["a" /* EditPage */]);
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
    //fungsi untuk mendelete dokumen
    MyDocumentPage.prototype.deleteDocument = function (title) {
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
                    text: 'Delete',
                    handler: function (data) {
                        _this.result_timer = (_this.timer1);
                        var target = { title: title, password: data.password, owner: _this.loginUser };
                        _this.document.deleteDocument(target).subscribe(function (result) {
                            console.log(Object.keys(result).length);
                            _this.result_timer = (_this.timer1);
                            if (!result) {
                                var alert_3 = _this.alertCtrl.create({
                                    title: 'Failed!',
                                    subTitle: 'Document failed to delete',
                                    buttons: ['OK']
                                });
                                alert_3.present();
                            }
                            else {
                                _this.mydocument;
                                _this.mydocument = result;
                                var alert_4 = _this.alertCtrl.create({
                                    title: 'Success!',
                                    subTitle: 'Document deleted',
                                    buttons: ['OK']
                                });
                                alert_4.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyDocumentPage = MyDocumentPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-document',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\my-document\my-document.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Document\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-row >\n        <ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n\n      <ion-card *ngFor=\'let data of mydocument\' style=\'border-radius: 5px;\'>\n      <ion-item style=\'background: lightgrey;\'>\n        <h2>{{data.title}}</h2>\n      </ion-item>\n\n      <ion-card-content class=\'konten\'>\n        <h2>Description :</h2>\n        <p class="desc">{{data.desc}}</p>\n        <hr>\n        <ion-row>\n          <ion-col><p class="owner"><ion-icon name="contact"></ion-icon>&ensp;{{data.owner}}</p></ion-col>\n          <ion-col><p class="date">{{data.date}}</p></ion-col>\n        </ion-row>\n        \n        \n      </ion-card-content>\n\n      <ion-row style=\'text-align: center;\'>\n        <ion-col col-4>\n          <button ion-button icon-start clear small (click)=\'downloadDocument(data.title)\'>\n            <ion-icon name="cloud-download"></ion-icon>\n            <div>Download</div>\n          </button>\n        </ion-col>\n          \n        <ion-col col-4>\n          <button ion-button icon-start clear small (click)=\'editDocument(data.title)\'>\n            <ion-icon name="create"></ion-icon>\n            <div>Edit</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button icon-start clear small (click)=\'deleteDocument(data.title)\'>\n            <ion-icon name="trash"></ion-icon>\n            <div>Delete</div>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      </ion-card>\n    \n    </ion-col>\n  </ion-row> \n\n\n      <ion-fab top right edge>\n        <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list>\n          <button ion-fab (click)="createDocument()"><ion-icon name="add-circle" ></ion-icon></button>\n          <button ion-fab (click)="myDocument()"><ion-icon name="albums" ></ion-icon></button>\n          <button ion-fab (click)="logout()"><ion-icon name="exit" ></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\my-document\my-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyDocumentPage);
    return MyDocumentPage;
    var MyDocumentPage_1;
}());

//# sourceMappingURL=my-document.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(418);


window["$"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_log_log__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tab1_tab1__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chatprivate_chatprivate__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_document_create_document__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_document_my_document__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_downloaddocument_downloaddocument__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chatdocument_chatdocument__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_chat_chat__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular_froala_wysiwyg__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = { url: 'https://documentserver.herokuapp.com/', options: {} };
//const config: SocketIoConfig = { url: 'http://192.168.43.119:2000', options: {} };


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatprivate_chatprivate__["a" /* ChatprivatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_document_create_document__["a" /* CreateDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_document_my_document__["a" /* MyDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_downloaddocument_downloaddocument__["a" /* DownloaddocumentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chatdocument_chatdocument__["a" /* ChatdocumentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_log_log__["a" /* LogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chatdocument/chatdocument.module#ChatdocumentPageModule', name: 'ChatdocumentPage', segment: 'chatdocument', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatprivate/chatprivate.module#ChatprivatePageModule', name: 'ChatprivatePage', segment: 'chatprivate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-document/create-document.module#CreateDocumentPageModule', name: 'CreateDocumentPage', segment: 'create-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloaddocument/downloaddocument.module#DownloaddocumentPageModule', name: 'DownloaddocumentPage', segment: 'downloaddocument', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editdocument/editdocument.module#EditdocumentPageModule', name: 'EditdocumentPage', segment: 'editdocument', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log/log.module#LogPageModule', name: 'LogPage', segment: 'log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-document/my-document.module#MyDocumentPageModule', name: 'MyDocumentPage', segment: 'my-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onlineuser/onlineuser.module#OnlineuserPageModule', name: 'OnlineuserPage', segment: 'onlineuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_ng_socket_io__["SocketIoModule"].forRoot(config),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatprivate_chatprivate__["a" /* ChatprivatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_document_create_document__["a" /* CreateDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_document_my_document__["a" /* MyDocumentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_downloaddocument_downloaddocument__["a" /* DownloaddocumentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chatdocument_chatdocument__["a" /* ChatdocumentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_log_log__["a" /* LogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_document_document__["a" /* DocumentProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the Tab1Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = 'HomePage';
        this.onlineuserRoot = 'OnlineuserPage';
    }
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\tab1\tab1.html"*/'<ion-tabs>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="information-circle" tabsHideOnSubPages="false"></ion-tab>\n    <ion-tab [root]="onlineuserRoot" tabTitle="Onlineuser" tabIcon="information-circle" tabsHideOnSubPages="false"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\tab1\tab1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DocumentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DocumentProvider = /** @class */ (function () {
    function DocumentProvider(socket, UserProvider) {
        this.socket = socket;
        this.UserProvider = UserProvider;
        console.log('Hello DocumentProvider Provider');
        console.log('Hello ChatProvider Provider');
    }
    //fungsi untuk mengatur dokumen yang sedang digunakan
    DocumentProvider.prototype.setCurrentDocument = function (data) {
        this.currentDocument = data;
    };
    //fungsi untuk menghapus dokumen yang sedang digunakan
    DocumentProvider.prototype.removeCurrentDocument = function () {
        this.currentDocument = null;
    };
    //fungsi untuk mengambil data semua dokumen
    DocumentProvider.prototype.getDocument = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getListDocument', { data: '' }, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi untuk mengambil data di my dokumen
    DocumentProvider.prototype.getMyDocument = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getListMyDocument', { owner: data }, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi untuk verifikasi dokumen
    DocumentProvider.prototype.verificationDocument = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('verification', { title: data.title, password: data.password, loginUser: _this.UserProvider.userLogin }, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi buat dokumen
    DocumentProvider.prototype.createDocument = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('createDocument', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi update dokumen
    DocumentProvider.prototype.updateListDcument = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.on("updateListDocument", function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi delete dokumen
    DocumentProvider.prototype.deleteDocument = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('deleteDocument', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi getTextDocument
    DocumentProvider.prototype.getTextDocument = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getTextDocument', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    //fungsi getLog
    DocumentProvider.prototype.getLog = function (data) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getLog', data, function (result) {
                observer.next(result);
            });
        });
        return observable;
    };
    DocumentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], DocumentProvider);
    return DocumentProvider;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_registration_registration__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__ = __webpack_require__(44);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userProvider, alertCtrl, app, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.socket = socket;
        this.username = '';
        this.password1 = '';
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.userProvider.userLogin = null;
        this.result_timer = (this.timer1);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.result_timer = (this.timer1);
        var data = { username: this.username, password: this.password1 };
        this.userProvider.login(data).subscribe(function (result) {
            if (result['res'] === false && result['err'] === 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Login Failed',
                    subTitle: 'Username already login',
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
            else if (result['res'] === false && result['err'] === 2) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Login Failed',
                    subTitle: 'Username or password incorect',
                    buttons: ['Dismiss']
                });
                alert_2.present();
            }
            else {
                _this.userProvider.setUser(_this.username);
                _this.nav = _this.app.getRootNavById('n4');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tab1_tab1__["a" /* Tab1Page */]);
            }
        });
    };
    LoginPage.prototype.registration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row >\n      <ion-col id=\'layout\' col-lg-6 col-md-6 col-xs-12>\n      \n          <ion-item padding>\n            <ion-input placeholder=\'Username\' type="text" [(ngModel)]=\'username\'></ion-input>\n          </ion-item>\n\n          <ion-item padding>\n            <ion-input placeholder=\'Password\' type="password" [(ngModel)]=\'password1\'></ion-input>\n          </ion-item>\n\n\n        <div padding>\n          <button ion-button block (click)=\'login()\' [disabled]="username===\'\'||password1===\'\'">Log In</button>\n        </div>\n\n        <div padding>\n          <button ion-button block clear (click)=\'registration()\'>Registration</button>\n        </div>\n\n    </ion-col>\n  </ion-row>  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chatdocument_chatdocument__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tab1_tab1__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_document_document__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_log_log__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import JQuery from 'jquery'








/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, socket, user, document, location, app, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.user = user;
        this.document = document;
        this.location = location;
        this.app = app;
        this.platform = platform;
        this.position = 0;
        this.options = {
            heightMin: 300,
            heightMax: 600,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                'embedly', 'insertTable', '|',
                'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                'print', 'html', '|', 'undo', 'redo', 'getPDF'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                'embedly', 'insertTable', '|',
                'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                'print', 'html', '|', 'undo', 'redo'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                'embedly', 'insertTable', '|',
                'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                'print', 'html', '|', 'undo', 'redo'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                '-',
                'embedly', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|', 'print', 'html', '|', 'undo', 'redo'],
            events: {
                'froalaEditor.click': function (e, editor) {
                    _this.result_timer = (_this.timer1);
                    var data = (editor.html.get());
                    console.log(_this.user.userLogin);
                    _this.socket.emit('sendTextDocument', { data: data, title: _this.title, sender: _this.user.userLogin });
                },
                'froalaEditor.keyup': function (e, editor) {
                    _this.result_timer = (_this.timer1);
                    console.log(_this.user.userLogin);
                    var data = (editor.html.get());
                    _this.socket.emit('sendTextDocument', { data: data, title: _this.title, sender: _this.user.userLogin });
                }
            }
        };
        this.title = this.document.currentDocument;
        //this.loginUser = this.user.userLogin
        this.socket.on('updateTextDocument', function (data) {
            _this.result_timer = (_this.timer1);
            _this.text = (data['data']);
            //error
            //this.setCursor(this.position,this.position)         
        });
        this.socket.on('timer', function (data) {
            _this.timer1 = data.time1;
            _this.timer2 = data.time2;
        });
    }
    EditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.document.getTextDocument(this.title).subscribe(function (result) {
            _this.text = result[0].text;
        });
    };
    EditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditPage');
        if (!this.user.userLogin) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
        this.location.onPopState(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
        this.platform.registerBackButtonAction(function () {
            _this.nav = _this.app.getRootNavById('n4');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tab1_tab1__["a" /* Tab1Page */]);
        });
        //this.edt.nativeElement.setSelectionRange(1,1)
    };
    EditPage.prototype.chat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_chatdocument_chatdocument__["a" /* ChatdocumentPage */]);
    };
    EditPage.prototype.log = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_log_log__["a" /* LogPage */]);
    };
    EditPage.prototype.back = function () {
        this.nav = this.app.getRootNavById('n4');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tab1_tab1__["a" /* Tab1Page */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('froalaEditor1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditPage.prototype, "edt", void 0);
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\pages\edit\edit.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons left>\n          <button ion-button icon-only (click)="back()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n    </ion-buttons>\n    \n    <ion-title>Edit\n      <span style="float: right;font-size: medium">\n        <span style="background-color: lightblue;">{{result_timer}}</span>\n        <span>{{timer2}}</span>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n\n  <ion-fab top right edge>\n    <button ion-fab mini (click)=\'log()\'><ion-icon name="create"></ion-icon></button>\n  </ion-fab>\n\n\n  <div class="sample">\n  	<h3>Edit document {{title}}</h3>\n  	<textarea [froalaEditor]="options" \n  		id=\'froalaEditor2\'\n      #froalaEditor1 \n  		[(froalaModel)]="text">\n  	</textarea>\n  </div>\n  \n\n</ion-content>\n\n\n<ion-fab right bottom>\n    <button ion-fab color="light" (click)=\'chat()\'><ion-icon name="chatbubbles" ></ion-icon></button>\n</ion-fab>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* PlatformLocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\SAYA\Documents\GitHub\document\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\SAYA\Documents\GitHub\document\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[413]);
//# sourceMappingURL=main.js.map