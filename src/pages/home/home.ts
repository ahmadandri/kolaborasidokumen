import { Component } from '@angular/core';
import { App, IonicPage, AlertController, NavController, NavParams, Platform } from 'ionic-angular';

import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
import { ChatProvider } from '../../providers/chat/chat'

import { EditPage } from '../../pages/edit/edit'
import { LoginPage } from '../../pages/login/login'
import { CreateDocumentPage } from '../../pages/create-document/create-document'
import { MyDocumentPage } from '../../pages/my-document/my-document'
import { DownloaddocumentPage } from '../../pages/downloaddocument/downloaddocument'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
nav
dokumen
loginUser
timer1
timer2
result_timer
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public platform : Platform,
  	public documentProvider : DocumentProvider,
  	public userProvider : UserProvider,
    public chatProvider : ChatProvider,
  	public alertCtrl : AlertController,
  	public app : App,
    private socket : Socket ) {

  	this.loginUser = this.userProvider.userLogin;

    this.socket.on('timer',(data)=>{
      this.timer1 = data.time1
      this.timer2 = data.time2
    })

  	this.socket.on("updateListDocument",result=>{
      this.dokumen=result['data']
  	})


  }


  ionViewWillEnter() {
    this.chatProvider.dLeaveDocument();

    if(!this.userProvider.userLogin){
      this.navCtrl.setRoot(LoginPage)
    }else{
      this.getDocument()
    }
  }

  ionViewDidLoad(){

    this.documentProvider.removeCurrentDocument();

    this.result_timer;

    this.platform.registerBackButtonAction(() => { 
      let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to exit?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Exit',
        handler: () => {
          this.platform.exitApp();
        }
      }
      ]
      });
      alert.present();
    });

    
  }


  getDocument(){
  	this.documentProvider.getDocument().subscribe(result=>{
    	this.result_timer = (this.timer1)
      this.dokumen=result
      
    })
  }

  createDocument(){
  	this.navCtrl.push(CreateDocumentPage)
  }

  myDocument(){
  	this.navCtrl.push(MyDocumentPage)
  }

  logout(){
    this.result_timer = (this.timer1)
    this.userProvider.logout()
    this.userProvider.setUser(null);
    this.app.getRootNav().setRoot(LoginPage)
    
  }

  downloadDocument(title){
  	let alert = this.alertCtrl.create({
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
        handler: data => {
  
        }
      },
      {
        text: 'Download',
        handler: data => {
          let target = {title:title,password:data.password}
          this.documentProvider.verificationDocument(target).subscribe(result=>{
          	console.log(result)
          	if(result){
             this.documentProvider.setCurrentDocument(title);
             this.nav = this.app.getRootNavById('n4')
             this.nav.setRoot(DownloaddocumentPage);

           }else{
             const alert = this.alertCtrl.create({
              title: 'Failed!',
              subTitle: 'Password incorrect!',
              buttons: ['OK']
              });
              alert.present();
           }
          })
        }
      }]
      });
    alert.present();
    }


 editDocument(title){
  	 let alert = this.alertCtrl.create({
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
        handler: data => {
  
        }
      },
      {
        text: 'Edit',
        handler: data => {
          let target = {title:title,password:data.password}
          this.documentProvider.verificationDocument(target).subscribe(result=>{
          	if(result){
             this.documentProvider.setCurrentDocument(title);
             this.nav = this.app.getRootNavById('n4')
             this.nav.setRoot(EditPage);
           }else{
             const alert = this.alertCtrl.create({
              title: 'Failed!',
              subTitle: 'Password incorrect!',
              buttons: ['OK']
              });
              alert.present();
           }
          })
        }
      }]
      });
    alert.present();
    }

}
