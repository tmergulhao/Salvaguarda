import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { QuestionarioComponent } from './../questionario/questionario.component';

@Component({
  selector: 'sg-dicas-finais',
  templateUrl: 'dicas.component.html'
})
export class DicasFinaisComponent {
  dado:any;
  condicao:boolean = false;
  constructor(
              params: NavParams, 
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private data: DataService) {
   console.log('UserId', params.get('userId'));
   this.dado = data.dicas;
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

 change(){
   this.condicao = true;
 }

}
