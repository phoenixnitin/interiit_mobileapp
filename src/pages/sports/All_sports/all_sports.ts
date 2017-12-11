import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Slides, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as jQuery from 'jquery';
@Component({
  selector: 'sport-all',
  templateUrl: 'all_sports.html'
})
export class SportAll {
  selectedItem: any;
  data: Array<object>;
  loading:any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  sportname: any;

  constructor(private _http: Http, public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    this.sportname = this.navParams.get('sport_name');
    console.log(this.sportname);
    this.selectedItem = navParams.get('item');
    this.loading = this.loadingCtrl.create({
              content: 'Please wait..',
              spinner: 'crescent'
            });
    this.loading.present(this.loading);
    switch (this.sportname){
      case 'Athletics': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Swimming')
                .subscribe(res => {
                  this.data = res.json().Swimming;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Badminton': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Badminton')
                .subscribe(res => {
                  this.data = res.json().Badminton;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Basketball': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Basketball')
                .subscribe(res => {
                  this.data = res.json().Basketball;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Cricket': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Cricket')
                .subscribe(res => {
                  this.data = res.json().Cricket;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Football': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Football')
                .subscribe(res => {
                  this.data = res.json().Football;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Hockey': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Hockey')
                .subscribe(res => {
                  this.data = res.json().Hockey;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Squash': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Squash')
                .subscribe(res => {
                  this.data = res.json().Squash;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Table Tennis': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=TableTennis')
                .subscribe(res => {
                  this.data = res.json().TableTennis;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Tennis': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Tennis')
                .subscribe(res => {
                  this.data = res.json().Tennis;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Volleyball': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Volleyball')
                .subscribe(res => {
                  this.data = res.json().Volleyball;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Weightlifting': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Weightlifting')
                .subscribe(res => {
                  this.data = res.json().Weightlifting;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Waterpolo': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Waterpolo')
                .subscribe(res => {
                  this.data = res.json().Waterpolo;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      case 'Swimming': this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Swimming')
                .subscribe(res => {
                  this.data = res.json().Swimming;
                  console.log(this.data);
                  this.hideLoading();
                }, error => {
                  console.log('error occured.');
                  this.hideLoading();
                  this.checkOffline();
                });break;
      default: console.log('switch gone wrong');
    }
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  ionViewDidLoad() {

  }
  selectTab(index, event) {
    this.pageSlider.slideTo(index);
    this.checkOffline();
    jQuery('body > ion-app > ng-component > ion-nav > sport-all > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().removeClass('active');
    event.target.classList.add('active');
  }
  checkOffline(){
    if(navigator.onLine == false){
      jQuery('body > ion-app > ng-component > ion-nav > sport-all > ion-content > div.scroll-content > ion-slides').hide();
      jQuery('body > ion-app > ng-component > ion-nav > sport-all > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().addClass('hide');
      jQuery('.offlinecontent').removeClass('hide');
    }
    else{
      jQuery('body > ion-app > ng-component > ion-nav > sport-swimming > ion-content > div.scroll-content > ion-slides').show();
      jQuery('body > ion-app > ng-component > ion-nav > sport-swimming > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().removeClass('hide');
      jQuery('.offlinecontent').addClass('hide active');
    }
  }
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
    // this.tabs= tab1;
   }
  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }
  hideLoading(){
            setTimeout(() => {
              this.loading.dismiss();
            },);
          }
  activeadd(i, event){
    if(i==0){
      event.target.classList.add('active');
    }
  }
}
