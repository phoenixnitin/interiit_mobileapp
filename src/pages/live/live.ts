import {Component, OnInit,OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import { NavController ,AlertController, LoadingController} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import *  as jQuery from 'jquery';
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}
@Component({
    selector: 'page-live',
    templateUrl:'live.html',
})
export class LivePage implements OnInit, OnDestroy{
    data: Array<object>;
    dataNew: Array<object>;
    loading:any;
    ngOnInit(){
      this.loadlive();
    };
    constructor(public sanitizer: DomSanitizer ,private _http: Http,public loadingCtrl: LoadingController,public NavCtrl: LoadingController,private youtube: YoutubeVideoPlayer){

    }

  loadlive(){
  if(navigator.onLine==true){
    var $ =jQuery;
    $("#offline").hide();
  this.loading = this.loadingCtrl.create({
  content: 'Please wait..',
     spinner: 'crescent'
 });
this.loading.present(this.loading);
this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
.subscribe(res => {
 this.data = res.json().livedata;
this.hideLoading();
this.func();
});
  }
  else{
    this.offline();
  }
 }
   func(){
    var $ =jQuery;
    $(document).ready(function(){
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined'){
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    tag.id = "iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    console.log('API loaded');
    window.onYouTubeIframeAPIReady = function () {
      console.log("check");
     runPlayer();
  }
    }
    else{
    runPlayer();}
    function runPlayer(){
      console.log("enet");
      var players = [];
      $('iframe').each( function (k,v) {
        console.log(this.id);
      players.push(new YT.Player(this.id, {
      videoId:'',
      events: {
        'onReady': function(event){
            console.log("enter");
            event.target.playVideo();
        },
        'onStateChange':function(status){
          if (status.data == YT.PlayerState.PLAYING) {
            $.each(players, function(k, v) {
                if (this.getPlayerState() == YT.PlayerState.PLAYING && this.getIframe().id != status.target.getIframe().id) {
                    this.pauseVideo();
                }
            });
        }
        }
      }
    }));
  });
    console.log('youtube iframe api ready!');
    }
})
}

    hideLoading(){
      setTimeout(() => {
        this.loading.dismiss();
      },);
    }
    // ngOnDestroy(){
    //   this.hideLoading();
    // }
    offline(){
    }
    ngOnDestroy(){
    this.hideLoading();
  }
 }
