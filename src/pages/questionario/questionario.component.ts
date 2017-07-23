import { DetalheDicaComponent } from './../detalhe-dica/detalhe-dica.component';
import { DicasFinaisComponent } from './../dicas/dicas.component';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'sg-questionario',
  templateUrl: 'questionario.component.html'
})
export class QuestionarioComponent {
  public dado: any;
  public quest: any = [];
  public cont: number=1;
  public questionario:boolean = true;

  constructor(
              params: NavParams, 
              public viewCtrl: ViewController, 
              private data: DataService,
              public modalCtrl: ModalController) {
    let temp;
    this.dado = data.perguntas();

    this.quest = []

    for(let i = 0; i < 5 ; i++){
      this.quest.push(this.dado[Math.floor(Math.random() * 33)])
    }

 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

  presentProfileModal() {
      let dica = this.data.dicas()[6];
      let profileModal = this.modalCtrl.create(DetalheDicaComponent, { userId: 8675309, dica : dica });
      profileModal.present();

      this.dismiss();
    }

 resposta(resp){
  this.cont++;
  if(this.cont >= 6){
    this.questionario = false;
  }
 }

}
