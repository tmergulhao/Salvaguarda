import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { QuestionarioComponent } from './../questionario/questionario.component';

@Component({
  selector: 'sg-confirmacao-game',
  templateUrl: 'confirmacao.component.html'
})
export class ConfirmacaoGameComponent {

  constructor(
              params: NavParams, 
              public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
   console.log('UserId', params.get('userId'));
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(QuestionarioComponent, { userId: 8675309 });
    profileModal.present();

    this.dismiss();
  }

}
