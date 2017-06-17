import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  dado: any;
  constructor(public navCtrl: NavController, private data: DataService) {
    this.dado = data.salvos();  
  }

}
