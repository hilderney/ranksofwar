import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { UserPage } from '../user/user';
import { RankPage } from '../rank/rank';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController) { }

	signLink() {
		this.navCtrl.push(LoginPage);
	}

	registerLink() {
		this.navCtrl.push(RegisterPage);
	}

	userLink() {
		this.navCtrl.push(UserPage);
	}

	rankLink() {
		this.navCtrl.push(RankPage);
	}

}
