
import { Component } from '@angular/core';
import { Platform, App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlatformLocation } from '@angular/common'
import { Socket } from 'ng-socket-io';
import { EditPage } from '../../pages/edit/edit';
import { DocumentProvider } from '../../providers/document/document' 

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
nav
data
current
timer1
timer2
result_timer
  constructor(public navCtrl: NavController,
  		public navParams: NavParams,
  		public platform : Platform,
  		public location : PlatformLocation,
  		public app : App,
  		public socket : Socket,
  		private document : DocumentProvider) {

  	this.current = this.document.currentDocument

  	this.socket.on('updateLog',(data)=>{
  		this.getLog(this.current)

  	});

  	this.socket.on('timer',(data)=>{
      this.timer1 = data.time1
      this.timer2 = data.time2
    })

  }

  ionViewWillEnter(){
  	this.current = this.document.currentDocument
  }



  ionViewDidLoad() {
  	
  	this.getLog(this.current)

  	this.location.onPopState(()=>{
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(EditPage)
    })

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(EditPage)
    })

  }

  back(){
    this.nav = this.app.getRootNavById('n4');
    this.nav.setRoot(EditPage)
  }

  getLog(data){  	
  	this.document.getLog(data).subscribe(result=>{
        this.data = result;
        this.result_timer = (this.timer1)
  	});
  }

}
