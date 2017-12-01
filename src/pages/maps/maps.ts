// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Platform } from 'ionic-angular';
// import { Geolocation } from 'ionic-native';
// import { GoogleMaps } from '../../providers/google-maps/google-maps';
// import { GoogleMapsCluster } from '../../providers/google-maps-cluster/google-maps-cluster';
// import { Http } from '@angular/http';

 
// @Component({
//   selector: 'page-maps',
//   templateUrl: 'maps.html'
// })
// export class MapsPage {
 
//     @ViewChild('map') mapElement: ElementRef;
//     @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
//     constructor(public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {

//     }
//     ionViewDidLoad(): void {
 
//         this.platform.ready().then(() => {
//             let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
//     console.log("Inside Maps.ts");
//     this.mapCluster.addCluster(map);
// });
// });
//  }
// }