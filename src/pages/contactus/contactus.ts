import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage {
  titles: string[];
  data : string;
  phoneno:string;
  items: Array<{title: string}>;
  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {
    this.titles = ['Webops', 'Finance', 'Sponsorship and PR','Safety and Security','Media and VFX','Hospitality','Design and Ambience'];
    this.items = [];
    for(let i = 0; i <7; i++) {
      this.items.push({
        title: this.titles[i]
      });
    }
  }
  itemSelected(name) {
      if(name == "Webops"){
        this.data = "sriram";
        this.phoneno= "9441463780"
      }
      if(name == "Finance"){
        this.data = "Muqeeth";
        this.phoneno = "8331963780"
      }
    }
  }
