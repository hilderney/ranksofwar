import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-register',
 	templateUrl: 'register.html',
 })
 export class RegisterPage {

 	@ViewChild('username') usr;
 	@ViewChild('password') pwd;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad RegisterPage');
 	}

 	registerUser() {

 		console.log('REGISTRADO');

		if (true) { // validar usr e pwd
			if (true) { // validar no banco se usr e pwd conferem
				const alert = this.alertCtrl.create({
					title: 'Registrado',
					subTitle: 'Seu usuário para login é "' + this.usr.value + '".',
					buttons: ['OK']
				});
				alert.present();
			}
		}
	}

}
