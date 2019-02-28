import { Component } from '@angular/core';
import { App, Platform, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
import { Tab1Page } from '../../pages/tab1/tab1'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the CreateDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-document',
  templateUrl: 'create-document.html',
})
export class CreateDocumentPage {

title=''
password=''
description=''
owner
nav
timer1
timer2
result_timer

  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public document: DocumentProvider,
  		public user: UserProvider,
  		private alertCtrl :AlertController,
      private platform : Platform,
      private socket : Socket,
      private app : App) {

      this.socket.on('timer',(data)=>{
        this.timer1 = data.time1
        this.timer2 = data.time2
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDocumentPage');
    this.owner = this.user.userLogin

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });
  }

  createDocument(){
      this.result_timer = (this.timer1)
  		let data = {title:this.title,password:this.password,description:this.description,owner:this.owner}
  		this.document.createDocument(data).subscribe(result=>{
  			if(result){

				let alert = this.alertCtrl.create({
				title: 'Success',
				subTitle: 'Document created!',
				buttons: ['Ok']
				});
				alert.present()
  			
  			}else{

  				let alert = this.alertCtrl.create({
				title: 'Failed',
				subTitle: 'Document already taken',
				buttons: ['Ok']
				});
				alert.present()

  			}
        this.result_timer = (this.timer1)

  		});
  }

}
