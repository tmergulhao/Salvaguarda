import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

import { DataService } from './../../service/data.service';
import { ConfirmacaoGameComponent } from './../confirmacao-game/confirmacao.component';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dado: any;
  constructor(
              public navCtrl: NavController, 
              private data: DataService,
              public modalCtrl: ModalController) {

    this.dado = data.dadosPoliciais();  

  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ConfirmacaoGameComponent, { userId: 8675309 });
    profileModal.present();
  }

}
