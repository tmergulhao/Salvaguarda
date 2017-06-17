import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from './../../service/data.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dado: any;
  constructor(public navCtrl: NavController, private data: DataService) {
    this.dado = data.salvos();  
  }

}
