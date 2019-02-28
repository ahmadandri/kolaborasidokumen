//import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Platform, App, IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { CreateDocumentPage } from '../../pages/create-document/create-document'
import { DownloaddocumentPage } from '../../pages/downloaddocument/downloaddocument'
import { EditPage } from '../../pages/edit/edit';
import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
import { LoginPage } from '../../pages/login/login'
import { Tab1Page } from '../../pages/tab1/tab1'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the MyDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-document',
  templateUrl: 'my-document.html',
})
export class MyDocumentPage {
loginUser
mydocument
nav
timer1
timer2
result_timer
  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		private alertCtrl: AlertController,
  		private document : DocumentProvider,
  		private user : UserProvider,
      private app : App,
      private socket : Socket,
      private platform : Platform) {


		this.socket.on('updateListMyDocument',(data) => {
			console.log(data);
		});

    this.socket.on('timer',(data)=>{
      this.timer1 = data.time1
      this.timer2 = data.time2
    })

  }



ionViewDidLoad() {
	this.loginUser = this.user.userLogin;
    if(!this.user.userLogin){
      this.navCtrl.setRoot(LoginPage)
      this.mydocument
    }else{
      this.document.getMyDocument(this.loginUser).subscribe(result=>{
    	this.mydocument= result
    	})
    }

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });

  }


//fungsi untuk membuat dokumen
  createDocument(){
    this.navCtrl.push(CreateDocumentPage)
  }


//fungsi menuju my document
  myDocument(){
    this.navCtrl.push(MyDocumentPage)
  }

 //fungsi untuk melakukan logout
   logout(){
    this.user.logout()
    this.nav = this.app.getRootNavById('n4')
    this.nav.setRoot(LoginPage)
   }


//fungsi untuk mendownload Dokumen
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
          this.document.verificationDocument(target).subscribe(result=>{
          	console.log(result)
          	if(result){
             this.document.setCurrentDocument(title);
             this.app.getRootNav().setRoot(DownloaddocumentPage);
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


//fungsi untuk melakukan edit dokumen
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
          this.document.verificationDocument(target).subscribe(result=>{
          	console.log(result)
          	if(result){
             this.document.setCurrentDocument(title);
             this.app.getRootNav().setRoot(EditPage);
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


//fungsi untuk mendelete dokumen
  deleteDocument(title){

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
        text: 'Delete',
        handler: data => {
          this.result_timer=(this.timer1)
          let target = {title:title,password:data.password,owner:this.loginUser}
          this.document.deleteDocument(target).subscribe(result=>{
            
          	console.log(Object.keys(result).length)
          	this.result_timer=(this.timer1)
            if(!result){
      				const alert = this.alertCtrl.create({
      				title: 'Failed!',
      				subTitle: 'Document failed to delete',
      				buttons: ['OK']
      				});
      				alert.present();

           }else{
            	this.mydocument
          		this.mydocument = result
            	const alert = this.alertCtrl.create({
      				title: 'Success!',
      				subTitle: 'Document deleted',
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
