import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Slides, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as jQuery from 'jquery';
@Component({
  selector: 'sport-waterpolo',
  templateUrl: 'waterpolo.html'
})
export class SportWaterpolo {
  // selectedItem: any;
  // waterpolo: Array<object>;
  loading:any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';


  constructor(private _http: Http, public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
    this.loading = this.loadingCtrl.create({
              content: 'Please wait..',
              spinner: 'crescent'
            });
    this.loading.present(this.loading);
    // this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1SURi6PxTX3T5NYNzHMUGF0lp9YJb4oVe8UNAZ3ZX-AU&sheet=Waterpolo')
    //             .subscribe(res => {
    //               this.waterpolo = res.json().Waterpolo;
    //               console.log(this.waterpolo);
    //               this.hideLoading();
    //             }, error => {
    //               console.log('error occured.');
    //               this.hideLoading();
    //               this.checkOffline();
    //             });
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
    // this.checkOffline();
    jQuery('body > ion-app > ng-component > ion-nav > sport-waterpolo > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().removeClass('active');
    event.target.classList.add('active');
  }
  // checkOffline(){
  //   if(navigator.onLine == false){
  //     jQuery('body > ion-app > ng-component > ion-nav > sport-waterpolo > ion-content > div.scroll-content > ion-slides').hide();
  //     jQuery('body > ion-app > ng-component > ion-nav > sport-waterpolo > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().addClass('hide');
  //     jQuery('.offlinecontent').removeClass('hide');
  //   }
  //   else{
  //     jQuery('body > ion-app > ng-component > ion-nav > sport-waterpolo > ion-content > div.scroll-content > ion-slides').show();
  //     jQuery('body > ion-app > ng-component > ion-nav > sport-waterpolo > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().removeClass('hide');
  //     jQuery('.offlinecontent').addClass('hide active');
  //   }
  // }
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
