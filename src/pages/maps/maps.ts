import { Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { GoogleMaps } from '../../providers/google-maps/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster/google-maps-cluster';
import { Http } from '@angular/http';
import { Component,ElementRef,ViewChild } from "@angular/core/";
 
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {
 
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
//mapElement: HTMLElement;

//pleaseconnect: HTMLElement;


 constructor(public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {

 }
 
    ionViewDidLoad(): void {

        this.platform.ready().then(() => {
   // this.mapElement = document.getElementById("map");
   // this.pleaseconnect = document.getElementById("please-connect");
    console.log("platform ready");

            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
            
    console.log("loaded map");

Promise.all([
                mapLoaded
            ])
    .then((map) => {
    
    console.log("Inside Maps.ts,");
    //this.maps.initMap();
    //donno which of the below two loads markers
    this.mapCluster.addCluster(this.maps);
    this.mapCluster.addCluster(map);
    console.log("function for adding marker array");
                   }
         );
                                        }
                                  );
 

                          }
}

