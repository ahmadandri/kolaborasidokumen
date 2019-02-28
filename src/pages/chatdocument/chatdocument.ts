import { Component, ViewChild  } from '@angular/core';
import { Platform, App, Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat'
import { UserProvider } from '../../providers/user/user'
import { DocumentProvider } from '../../providers/document/document'
import { EditPage } from '../../pages/edit/edit'
import { LoginPage } from '../../pages/login/login'
import { Socket } from 'ng-socket-io'
import { PlatformLocation } from '@angular/common'
/**
 * Generated class for the ChatdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdocument',
  templateUrl: 'chatdocument.html',
})
export class ChatdocumentPage {
nav
messages=[]
message=''
to
from
loginUser
timer1
timer2
result_timer
@ViewChild(Content) content: Content;
  
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private chat :ChatProvider,
      private user : UserProvider,
      private document : DocumentProvider,
      private socket : Socket,
      private location :PlatformLocation,
      private app : App,
      public platform: Platform) {
  	
  	this.to=this.document.currentDocument

  	this.from = this.user.userLogin
    this.socket.on('dUpdateMessage',(result)=>{
      this.messages.push(result);
      this.result_timer = (this.timer1)
    })

    this.socket.on('timer',(data)=>{
        this.timer1 = data.time1
        this.timer2 = data.time2
    })
  }

 ionViewDidLoad() {
  this.loginUser = this.user.userLogin;
    console.log(this.user.userLogin)
    if(!this.user.userLogin){
      this.nav = this.app.getRootNavById('n4');
      this.nav.setRoot(LoginPage)
    }else{
      this.chat.dGetMessage(this.to).subscribe(result=>{
        for(let i = Object.keys(result).length-1;i>=0;i--){
           this.messages.push(result[i])
         } 
      })
    }

     this.location.onPopState(()=>{
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(EditPage)
    });

     this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(EditPage)
    });
  }

  back(){
    this.nav = this.app.getRootNavById('n4');
    this.nav.setRoot(EditPage)
  }

  sendMessage(){
    this.result_timer = (this.timer1)
    let data = {text:this.message,to:this.to,from:this.from}
    this.message=''
    this.chat.dSendMessage(data).subscribe(result=>{
      
      this.messages.push(result)
    })
  }

}
