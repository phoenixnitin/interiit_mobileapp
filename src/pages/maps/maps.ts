import {Component,ViewChild,ElementRef} from '@angular/core';
import {Platform,NavParams,LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import {Geolocation,GeolocationOptions} from '@ionic-native/geolocation';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


declare var google;

@Component({
    selector: 'page-map',
    templateUrl: './maps.html'
})

export class MapsPage{

@ViewChild('mapContainer') mapContainer : ElementRef;
@ViewChild('directionsPanel') directionsPanel : ElementRef;

map : any;
originLocation;
destinationLocation = {lat: 12.991296, lng: 80.234234};
markers;
title;
loading;

geoLocationOption : GeolocationOptions = {
  enableHighAccuracy: true
}

mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

    constructor(private platform:Platform, 
                private navParams: NavParams, 
                private geolocation : Geolocation,
                public loadingCtrl: LoadingController, 
                public http : Http){
      this.title = this.navParams.get('title');
      this.destinationLocation = this.navParams.get('location');
      this.presentLoadingCustom();

      this.platform.ready().then(() => {
        this.geolocation.getCurrentPosition(this.geoLocationOption)
                        .then( origin => {
                          this.originLocation = {lat: origin.coords.latitude, lng: origin.coords.longitude};
                          console.log('Origin Position ' + this.originLocation);
                          this.startNavigating(); 
                        })
                        .catch( err => window.alert("Unable to Find You!!"));
        // this.displayGoogleMap();
        // this.startNavigating();
      });
    }

    ionViewDidLoad(){
      this.displayGoogleMap();
    }

    getmarkers(){
        this.http.get('assets/data/markers.json')
                 .map(res => res.json())
                 .subscribe(data => {
                    this.markers = data;
                 });
    }

    addMarkersToMap(markers) {
        for(let marker of markers) {
            var position = new google.maps.LatLng(marker.lat, marker.lng);
            var dogwalkMarker = new google.maps.Marker({position: position, title: marker.title,animation: google.maps.Animation.DROP});
            dogwalkMarker.setMap(this.map);
        }
    }

    displayGoogleMap(){
         let latLng = new google.maps.LatLng(12.991296, 80.234234);

         let mapOptions = {
            center: latLng,
            // disableDefaultUI: false,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: this.mapStyle
         }

         this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    }

    startNavigating(){
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
 
        directionsService.route({
            origin: this.originLocation,
            destination: this.destinationLocation,
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
                this.loading.dismiss();
            } else {
                window.alert('Directions request failed due to ' + status);
                console.log('Directions request failed due to ' + status);
                this.loading.dismiss();
            }
 
        });
    }

    presentLoadingCustom() {
      this.loading = this.loadingCtrl.create({
        // spinner: 'hide',
        content: `
          <div class="custom-spinner-container">
            <div class="custom-spinner-box"></div>
            Loading Directions..
          </div>`
      });

      this.loading.present();
    }

}