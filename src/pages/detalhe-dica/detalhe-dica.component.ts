import { Component, Input } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { QuestionarioComponent } from './../questionario/questionario.component';

@Component({
  selector: 'sg-detalhe-dica',
  templateUrl: 'detalhe-dica.component.html'
})
export class DetalheDicaComponent {
  @Input() public dica:any;
  
  constructor(
              params: NavParams, 
              public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
  //  console.log('UserId', params.get('userId'));
      this.dica = params.get('dica');
      console.log(this.dica);
      
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
