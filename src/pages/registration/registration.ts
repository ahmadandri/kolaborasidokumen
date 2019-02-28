import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { LoginPage } from '../../pages/login/login'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
	username=''
	password1=''
	password2=''
	timer1
	timer2
	result_timer
  constructor(public navCtrl: NavController,
  				public navParams: NavParams,
  				private userProvider:UserProvider,
  				private alertCtrl:AlertController,
  				private socket : Socket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
    this.socket.on('timer',(data)=>{
          this.timer1 = data.time1
          this.timer2 = data.time2
    })
  }

  registration(){
  	console.log('registrasi')
  	this.result_timer=this.timer1
  	let data = {username:this.username,password1:this.password1,password2:this.password2}
  	
  	if(this.password1.length<6||this.password2.length<6){
		
		let alert = this.alertCtrl.create({
			title: 'Registration Failed',
			subTitle: 'Minimum password 6 character',
			buttons: ['Dismiss']
			});
			alert.present();
		}

  	else if(this.password1!==this.password2){
  		
  		let alert = this.alertCtrl.create({
			title: 'Registration Failed',
			subTitle: 'Please check your input',
			buttons: ['Dismiss']
			});
		alert.present();
	
	}else{

  		this.userProvider.registration(data).subscribe(result=>{
  			console.log(result)
  			this.result_timer=this.timer1
  			if(result){
				
				let alert = this.alertCtrl.create({
				title: 'Registration',
				subTitle: 'Success',
				buttons: ['Dismiss']
				});
				alert.present();

  			}else{
				
				let alert = this.alertCtrl.create({
				title: 'Registration Failed',
				subTitle: 'Username already taken',
				buttons: ['Dismiss']
				});
				alert.present();

  			}
  		})
  	}
  	
  }


  login(){
  	this.navCtrl.setRoot(LoginPage)
  	
  }

 
}
