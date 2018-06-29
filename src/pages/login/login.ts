import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

 	@ViewChild('username') usr;
 	@ViewChild('password') pwd;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad LoginPage');
 	}

 	signInUser() {

 		console.log('LOGADO');

		if (true) { // validar usr e pwd

			if (true) { // validar no banco se usr e pwd conferem
				const alert = this.alertCtrl.create({
					title: 'Sucesso',
					subTitle: 'Bem vindo "'+ this.usr.value + '".',
					buttons: ['OK']
				});
				alert.present();
			}
		}
	}

}
