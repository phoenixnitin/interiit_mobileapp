import { Component, OnInit,OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { VideoPlayer } from '@ionic-native/video-player';
import 'rxjs/add/operator/map';
import { NavController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import *  as jQuery from 'jquery';
import { ModalPage } from '../modal/modal';
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage implements OnInit, OnDestroy{

    load:boolean = false;
    imageCounter = 20;
    videoCounter = 10;
    showClick = true;
    showVideoClick=true;
    data: Array<object>;
    c = -1;
    santurl=[];
    loading:any;
    ngOnInit(){
      this.loadlive();
    };
    gallery: string ="photos";
    isAndroid: boolean = false;
    imageArray;
    videoArray;
    constructor(public sanitizer: DomSanitizer, private _http: Http, public modalController: ModalController,public loadingCtrl: LoadingController,public navCtrl: NavController,private youtube: YoutubeVideoPlayer, private _photoViewer: PhotoViewer
    ){
          this.showClick=true;
          this.showVideoClick=true;
          this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Image')
                              .subscribe(res => {
                                  this.imageArray = res.json().Image;
                              });

          this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1aqljoEV1kLxP8ZtzsW3Cqj8-L72Q79trNJcsNM5B_Lo&sheet=livedata')
              .subscribe(res => {
                  this.data = res.json().Video;
              });

  }
  openmodal(ind){
    let modal = this.modalController.create(ModalPage,{'ind':ind,'imageCounter':this.imageCounter});
    modal.present();
    console.log(ind);
  }
  clickMore(data){
    if(data === 'image'){
      this.imageCounter = this.imageCounter + 20;
      if(this.imageCounter > this.imageArray.length){
        this.showClick = false;
      }
    }
    else{
      this.videoCounter = this.videoCounter + 10;
      if(this.videoCounter > this.data.length){
        this.showVideoClick = false;
      }
    }
  }

  loadlive(){
    if(navigator.onLine==true)  {
    var $ =jQuery;
    $("#offline").hide();
    this.videoCounter =10;
    if(!this.data){
    this.loading = this.loadingCtrl.create({
    content: 'Please wait..',
       spinner: 'crescent'

   });
    this.loading.present(this.loading);
    this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1YmVNuBSrq58PZRdxNu1-epOBB3osCaMXnYU54vgzfAI&sheet=Video')
    .subscribe(res => {
     this.data = res.json().Video;
    this.hideLoading();
    func();
    });
  }
  else{
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..',
         spinner: 'crescent'

     });
    this.loading.present(this.loading);
    this.hideLoading1();
    func();
  }
    }
    else{
      this.offline();
    }
     function func(){
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
    }else{
      runPlayer();
    }
      function runPlayer(){
        console.log("enet");
        var players = [];
        $('iframe').filter(function(){return this.src.indexOf('https://www.youtube.com/') == 0}).each( function (k, v) {
          console.log(this.id);
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
      console.log('youtube iframe api ready!');
      }
    })
  }
    }

      hideLoading(){
        setTimeout(() => {
          this.loading.dismiss();
        },);
      }
      hideLoading1(){
        setTimeout(() => {
          this.loading.dismiss();
        },1000);
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



  ViewPhoto(url,title){
      this._photoViewer.show(url,title);
  }

  ngOnDestroy(){
    this.hideLoading();
  }


}
