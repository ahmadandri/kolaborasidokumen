import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { RegistrationPage } from '../../pages/registration/registration'
import { UserProvider } from '../../providers/user/user'
import { Tab1Page } from '../../pages/tab1/tab1'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	username=''
	password1=''
  nav
  timer1
  timer2
  result_timer
  constructor(public navCtrl: NavController,
  			public navParams: NavParams,
  			private userProvider:UserProvider,
  			private alertCtrl:AlertController,
  			public app : App,
        public socket : Socket) {

        this.socket.on('timer',(data)=>{
          this.timer1 = data.time1
          this.timer2 = data.time2
        })
  }

  ionViewDidLoad() {
    this.userProvider.userLogin=null
    this.result_timer = (this.timer1)
  }

  login(){
    this.result_timer=(this.timer1)
  	let data = {username:this.username,password:this.password1}
  	this.userProvider.login(data).subscribe(result=>{

  		if(result['res']===false&&result['err']===1){
  			let alert = this.alertCtrl.create({
			title: 'Login Failed',
			subTitle: 'Username already login',
			buttons: ['Dismiss']
			});
			alert.present()

  		}else if(result['res']===false&&result['err']===2){
			let alert = this.alertCtrl.create({
			title: 'Login Failed',
			subTitle: 'Username or password incorect',
			buttons: ['Dismiss']
			});
			alert.present()
  		
  		}else{
  			this.userProvider.setUser(this.username)
			  this.nav = this.app.getRootNavById('n4')
        this.nav.setRoot(Tab1Page)
  		}

  	});
  }

  registration(){
  	this.navCtrl.push(RegistrationPage)
  }

}
