import {Component, OnInit,OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import { NavController ,AlertController, LoadingController} from 'ionic-angular';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import *  as jQuery from 'jquery';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

declare var YT

@Component({
    selector: 'page-live',
    templateUrl:'live.html',
})
export class LivePage implements OnInit, OnDestroy{
    off:boolean = false;
    data: Array<object>;
    urls =[];
    interval;
    c = -1;
    santurl=[];
    loadeddata: Array<object>;
    loading:any;
    ngOnInit(){
    let that = this;
    this.loadlive();
    this.interval = setInterval(function () {
      that.loadlive();
    }, 5000);
    };
    constructor(public sanitizer: DomSanitizer ,private _http: Http,public loadingCtrl: LoadingController,public navCtrl: NavController,private youtube: YoutubeVideoPlayer){
    }
  loadlive(){
  if(navigator.onLine==true){
    var $ =jQuery;
    $("#offline").hide();
    if(!this.data){
  this.loading = this.loadingCtrl.create({
  content: 'Please wait..',
     spinner: 'crescent'

 });
this.loading.present(this.loading);
this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
.subscribe(res => {
this.data = res.json().livedata;
for(let i =0;i<this.data.length;i++){
  if(this.data[i]['Status']=='online'){
    this.off = false;
    break;
  }
  else{ this.off = true;}
}
console.log(this.off);
this.hideLoading();
if(!this.loadeddata){
  this.loadeddata = this.data;
}
func();
});
  }
else{
console.log("esle case");
this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
.subscribe(res => {
this.data = res.json().livedata;
for(let i =0;i<this.data.length;i++){
  if(this.data[i]['Status']=='online'){
    this.off = false;
    break;
  }
  else{ this.off = true;}
}
});
  }
  }
  else{
    this.offline();
  }
   function func(){
    var $ =jQuery;
    $(document).ready(function(){
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined'){
    console.log("dont know")
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    tag.id = "iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   // console.log('API loaded');
    window.onYouTubeIframeAPIReady = function () {
      //console.log("check");
     runPlayer();
    }
  }
    else { runPlayer();}
    function runPlayer(){
      //console.log("enet");
      var players = [];
      $('iframe').filter(function(){return this.src.indexOf('https://www.youtube.com/') == 0}).each( function (k, v) {
      if(!this.id){this.id = k +'embedvideo'}
      players.push(new YT.Player(this.id, {
      videoId:'',
      events: {
        'onReady': function(event){
            console.log("enter")
            event.target.playVideo;
        },
        'onStateChange':function(status){
          if (status.data == YT.PlayerState.PLAYING) {
            $.each(players, function(k, v) {
                if (this.getPlayerState() == YT.PlayerState.PLAYING && this.getIframe().id != status.target.getIframe().id) {
                    this.stopVideo();
                }
            });
        }
        }
      }
    }));
  });
   // console.log('youtube iframe api ready!');
    }
  })
}

  }

    hideLoading(){
      setTimeout(() => {
        this.loading.dismiss();
      },);

    }
    geturl(id,index){
    if(this.c<index){
    this.c= index;
    this.santurl[index]=this.sanitizer.bypassSecurityTrustResourceUrl(id);
    return this.santurl[index]
    }
    else{
      return this.santurl[index];
    }
  }
    offline(){
    }
    ngOnDestroy(){
      this.hideLoading();
      clearInterval(this.interval);
}
 }
