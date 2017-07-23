import { DetalheDicaComponent } from './../../pages/detalhe-dica/detalhe-dica.component';
import { DataService } from './../../service/data.service';
import { ViewController, ModalController } from 'ionic-angular';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sg-dicas',
    templateUrl: './dicas.component.html',
    styles: [] 
})
export class DicasComponent implements OnInit{
    @Input() dados: any;

    ngOnInit(): void {
    }
    
    constructor(
              public viewCtrl: ViewController, 
              public modalCtrl: ModalController
    ){

    }


    abreDica(d:any){
        // console.log(d);

        // let dica = this.data.dicas()[6];
      let profileModal = this.modalCtrl.create(DetalheDicaComponent, { dica : d });
      profileModal.present();
    }



    
}