import { Component, OnDestroy } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage implements OnDestroy{
  notification: Array<object>;
  notificationOffline: Array<object>;
  loading:any;
  constructor(private _http: Http, public loadingCtrl: LoadingController, public navCtrl: NavController){
    if(window.localStorage.notification !== 'undefined'){
      this.notificationOffline = JSON.parse(localStorage.getItem('notification'));
    }
  }

  ionViewWillEnter(){
    this.getdata();
  }
  getdata(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..',
      spinner: 'crescent'
    });
    this.loading.present(this.loading);
    if(navigator.onLine){
    this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1vyh9pK7QJjwZxgRvXxhVKaxJV0y8VACcvm4Y5v9KxEM&sheet=Notification')
                  .subscribe(res => {
                    this.notification = res.json().Notification;
                    this.notificationOffline = this.notification;
                    // console.log(this.notification);
                    window.localStorage.setItem('notification', JSON.stringify(this.notification));
                    this.hideLoading();
                  }, error => {
                    this.notificationOffline = JSON.parse(localStorage.getItem('notification'));
                    this.hideLoading();
                  });
    }
    else{
      this.notificationOffline = JSON.parse(localStorage.getItem('notification'));
      this.hideLoading();
    }
  }
  private hideLoading(){
    setTimeout(() => {
      this.loading.dismiss();
    },);
  }
  ngOnDestroy(){
    this.hideLoading();
  }
}
