import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'sg-confirmacao-game',
  templateUrl: 'confirmacao.component.html'
})
export class ConfirmacaoGameComponent {

  constructor(params: NavParams, public viewCtrl: ViewController) {
   console.log('UserId', params.get('userId'));
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

}
