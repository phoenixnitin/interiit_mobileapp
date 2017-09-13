import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage {
  titles: string[];
  names1: string[];
  phone: string;
  name: string;
  data: string;
  value: string;
  items: Array<{title: string, names1: string}>;
  constructor(public navCtrl: NavController) {
    this.titles = ['Webops', 'Financs', 'Sponsorship and PR','Safety and Security','Media and VFX','Hospitality','Design and Ambience'];
    this.names1 =['a','b','c','d','e','f','g'];
    this.items = [];
    for(let i = 0; i <7; i++) {
      this.items.push({
        title: this.titles[i],
        names1: this.names1[i]
      });
    }
  }
 itemSelected(name) {
 if(name == "Webops"){
 this.data = "hii"
 }
  }
}

