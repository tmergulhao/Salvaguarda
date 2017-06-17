import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  dado: any;
  constructor(public navCtrl: NavController, private data: DataService) {
    this.dado = data.dados_policiais();  
  }
}
