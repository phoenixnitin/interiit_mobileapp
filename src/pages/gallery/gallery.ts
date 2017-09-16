import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  images = ['1.png','2.png','3.png','4.png'];
  videos: any[] = [
    {
      title: 'Inter IIT 2017 Logo Revealed',
      video: 'https://www.youtube.com/embed/3_7_w6HuJJQ',
    }
  ]
  constructor(public navCtrl: NavController) {

  }

}
