import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'sg-questionario',
  templateUrl: 'questionario.component.html'
})
export class QuestionarioComponent {
  dado: any;
  perguntas: any = [];
  cont: number=1;
  constructor(params: NavParams, public viewCtrl: ViewController, private data: DataService) {
    this.dado = data.perguntas;

    // for(let i=0; i<5; i++){
    //   console.log(Math.floor(Math.random() * 40));
    //     console.log(this.dado);
        
    //     this.perguntas.push(this.dado[Math.floor(Math.random() * 40)]); 
    // }
    console.log(this.perguntas);
    
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

 resposta(resp){
  this.cont++;
  
 }

}
