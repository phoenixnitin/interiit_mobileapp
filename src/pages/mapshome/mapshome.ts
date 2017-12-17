import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,Platform } from 'ionic-angular';
import {Http} from '@angular/http';
import {Geolocation,GeolocationOptions} from '@ionic-native/geolocation'
import {Diagnostic} from '@ionic-native/diagnostic';
import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-mapshome',
  templateUrl: 'mapshome.html'
})
export class MapsHomePage {

markers : [{}];

geoLocationOption : GeolocationOptions = {
  enableHighAccuracy: true
}

  constructor(private diagnostic: Diagnostic,
              private platform: Platform,
              public geolocation: Geolocation,
              public alertCtrl: AlertController, 
              public navCtrl: NavController, 
              public http:Http) {
    this.getmarkers();
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      // this.geolocation.getCurrentPosition(this.geoLocationOption).then((Available) => {
      //   console.log("Location is Available");
      // }).catch((err) => {
      //   this.TurnOnGpsAlert();
      // });
      this.TurnOnGpsAlert();
    })
  }


  TurnOnGpsAlert(){
    let turnOnGpsAlert = this.alertCtrl.create({
      title: 'GPS is Turned Off!!',
      message: "For best results, let your device turn on location, which uses Google's location service.",
      buttons:[
        {
          text:'Cancel',
          handler: () => {
            console.log('GPS not Enabled');
          }
        },
        {
          text:'Turn On GPS',
          handler: () => {
            this.diagnostic.switchToLocationSettings();
          }
        }
      ]

    });
    turnOnGpsAlert.present();
  }

  getmarkers(){
        this.http.get('assets/data/markers.json')
                 .map(res => res.json())
                 .subscribe(data => {
                    this.markers = data;
                 });
  }

  gomaps(lat,lng,title){
    let location = {lat: lat,lng: lng};
    this.navCtrl.push(MapsPage,{location,title});
    console.log(lat,lng);
  }

  GotoMaps(){
    console.log('Go to Maps Run!!');
  }
}
