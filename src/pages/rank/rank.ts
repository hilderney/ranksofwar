import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, ViewController  } from 'ionic-angular';
//import { Profile } from './rank';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()

 @Component({
 	selector: 'page-rank',
 	templateUrl: 'rank.html',
 })

 export class RankPage {

 	public playerList = RankPage.getPlayers();

 	constructor(
 		public navCtrl: NavController
 		, public navParams: NavParams
 		, public modalCtrl: ModalController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad RankPage');
 	}

 	rankUp(item) {
 		this.log('rank up');
 	}

 	rankDown(item) {
 		this.log('rank down');
 	}

 	starUp(item) {
 		this.log('star up');
 	}

 	starDown(item) {
 		this.log('star down');
 	}

 	playerInfoClick(id) {
 		console.log(id);
 		
 		let playerInfoModal = this.modalCtrl.create(ProfileModal, id);
 		playerInfoModal.present();
 	}

 	log(m){
 		console.log(m);
 	}

 	public static getPlayers(){
 		return [
 		{
 			id: 0,
 			name: 'Doido',
 			quote: 'Uga Buga!',
 			rank: 'Soldado',
 			image: 'assets/img/avatar-gollum.jpg',
 			items: [
 			{ title: 'Estrela', value: '2' },
 			{ title: 'Vitórias no War', value: '1' },
 			{ title: 'Pontuação', value: '22' }
 			]
 		},
 		{
 			id: 1,
 			name: 'Rei',
 			quote: 'STF to chegando!',
 			rank: 'Cabo',
 			image: 'assets/img/avatar-gollum.jpg',
 			items: [
 			{ title: 'Estrela', value: '3' },
 			{ title: 'Vitórias no War', value: '4' },
 			{ title: 'Pontuação', value: '28' }
 			]
 		},
 		{
 			id: 2,
 			name: 'Bruno',
 			quote: 'Daniel vai dormir!',
 			rank: 'Recruta',
 			image: 'assets/img/avatar-gollum.jpg',
 			items: [
 			{ title: 'Estrela', value: '0' },
 			{ title: 'Vitórias no War', value: '1' },
 			{ title: 'Pontuação', value: '16' }
 			]
 		},
 		{
 			id: 3,
 			name: 'Derney',
 			quote: 'Eu não sei pra que resolvo fazer essas coisas!',
 			rank: 'Recruta',
 			image: 'assets/img/avatar-gollum.jpg',
 			items: [
 			{ title: 'Estrela', value: '0' },
 			{ title: 'Vitórias no War', value: '0' },
 			{ title: 'Pontuação', value: '0' }
 			]
 		},
 		{
 			id: 4,
 			name: 'Lucas',
 			quote: 'Calma Dry!',
 			rank: 'Soldado',
 			image: 'assets/img/avatar-gollum.jpg',
 			items: [
 			{ title: 'Estrela', value: '2' },
 			{ title: 'Vitórias no War', value: '2' },
 			{ title: 'Pontuação', value: '20' }
 			]
 		}
 		];
 	}

 }




 @Component({
 	template: `
 	<ion-header>
	  <ion-toolbar>
	    <ion-title>
	      Description
	    </ion-title>
	    <ion-buttons start>
	      <button ion-button (click)="dismiss()">
	        <ion-icon name="close"></ion-icon>
	      </button>
	    </ion-buttons>
	  </ion-toolbar>
	</ion-header>
	<ion-content>
	  <ion-list>
	    <ion-item>
	      <ion-avatar item-start>
	        <img src="{{player.image}}">
	      </ion-avatar>
	      <h2>{{player.name}}</h2> <span>{{player.rank}}</span>
	      <p>{{player.quote}}</p>
	    </ion-item>
	    <ion-item *ngFor="let item of player['items']">
	      <ion-list>
	        <ion-item>
	          {{item.title}}
	          <ion-note item-end>
	            {{item.value}}
	          </ion-note>
	        </ion-item>
	      </ion-list>
	    </ion-item>
	  </ion-list>
	</ion-content>
 	`
 })
 export class ProfileModal {
 	player;

 	constructor(
 		public platform: Platform,
 		public params: NavParams,
 		public viewCtrl: ViewController
 		) {
      var list = RankPage.getPlayers();
      this.player = list[this.params.get('id')];
      //this.player = list[1];
      console.log(this.player);
      
  }

  dismiss() {
  	this.viewCtrl.dismiss();
  }
}
