
import { Component, ViewChild  } from '@angular/core';
import { App, Content, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat'
import { UserProvider } from '../../providers/user/user'
import { Tab1Page } from '../../pages/tab1/tab1'
import { Socket } from 'ng-socket-io'
//import JQuery from 'jquery'
/**
 * Generated class for the ChatprivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatprivate',
  templateUrl: 'chatprivate.html',
})
export class ChatprivatePage {

  messages=[]
  message=''
  to
  from
  nav
  timer1
  timer2
  result_timer
  
  @ViewChild("content") content: Content;
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public platform : Platform,
      public app : App,
      private chat :ChatProvider,
      private user : UserProvider,
      private socket : Socket) {
    
    this.from = this.user.userLogin;


   this.socket.on('pUpdateMessage',(data) => {
        this.messages.push(data)
        this.result_timer = (this.timer1)
    });

    this.socket.on('timer',(data)=>{
        this.timer1 = data.time1
        this.timer2 = data.time2
    })  
    
    }


  ionViewWillEnter() {
    this.to=this.navParams.get('target')


    this.chat.pGetMessage({to:this.to,from:this.from}).subscribe(result=>{
        for(let i = Object.keys(result).length-1;i>=0;i--){
           this.messages.push(result[i])
         }      
    });

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });
    
  }

  sendMessage(){
    this.result_timer = (this.timer1)
    let data = {text:this.message,to:this.to,from:this.from}
    this.chat.pSendMessage(data).subscribe(result=>{
      this.messages.push(result);
      
    })
    
  }
}
