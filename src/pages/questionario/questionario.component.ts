import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'sg-questionario',
  templateUrl: 'questionario.component.html'
})
export class QuestionarioComponent {

  constructor(params: NavParams, public viewCtrl: ViewController) {
   console.log('UserId', params.get('userId'));
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

 resposta(resp){
  console.log(resp);
  
 }

}
