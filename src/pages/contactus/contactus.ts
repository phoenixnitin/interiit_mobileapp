import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage {
  titles: string[];
  data : string[];
  phoneno:string[];
  cord_data: Array<{name:string , phoneno:string}>;
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
        if(name=="Webops"){
        this.data = ["sriram","ashwin","muqeeth"];
        this.phoneno= ["1234567809","86384783432","7435234341"]
        this.cord_data =[];
        for(let i = 0; i <3; i++) {
          this.cord_data.push({
            name: this.data[i],
            phoneno:this.phoneno[i]
          });
        
      }
    }
  
  if(name== "Finance"){
    this.data = ["sriram1","ashwin1","muqeeth1"];
    this.phoneno= ["1234567809","86384783432","7435234341"]
    this.cord_data =[];
    for(let i = 0; i <3; i++) {
      this.cord_data.push({
        name: this.data[i],
        phoneno:this.phoneno[i]
      });
    
  }
}
if(name== "Sponsorship and PR"){
  this.data = ["sriram2","ashwin2","muqeeth2"];
  this.phoneno= ["1234567809","86384783432","7435234341"]
  this.cord_data =[];
  for(let i = 0; i <3; i++) {
    this.cord_data.push({
      name: this.data[i],
      phoneno:this.phoneno[i]
    });
  
  }
}
  }
  }
