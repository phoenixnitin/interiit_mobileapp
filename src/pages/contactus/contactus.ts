import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage {
  titles: string[];
  src : string[];
  items: Array<{title: string}>;
  constructor(public navCtrl: NavController) {
    this.titles = ['Webops', 'Financs', 'Sponsorship and PR','Safety and Security','Media and VFX','Hospitality','Design and Ambience'];
    this.items = [];
    for(let i = 0; i <7; i++) {
      this.items.push({
        title: this.titles[i]
      });
    }
  }
  itemSelected(event, item) {
    console.log(item.title);
  }
}
