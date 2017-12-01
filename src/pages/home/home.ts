import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { SponsorshipPage } from '../sponsorship/sponsorship';
import { ResultPage } from '../result/result';
import { SportsPage } from '../sports/sports';
import { GalleryPage } from '../gallery/gallery';
import { ContactUsPage } from '../contactus/contactus';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
gomaps(){
    this.navCtrl.push(MapsPage);
    //console.log('No Maps Page!!');
  }
gospons(){
    this.navCtrl.push(SponsorshipPage);
  }
goresult(){
    this.navCtrl.push(ResultPage);
  }
gosports(){
    this.navCtrl.push(SportsPage);
  }
gogallery(){
    this.navCtrl.push(GalleryPage);
  }
gocontact(){
    this.navCtrl.push(ContactUsPage);
  }        
}
