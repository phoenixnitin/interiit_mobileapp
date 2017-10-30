import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  loading:any;
  constructor(private _http: Http, public loadingCtrl: LoadingController, public navCtrl: NavController){

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
    this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1vyh9pK7QJjwZxgRvXxhVKaxJV0y8VACcvm4Y5v9KxEM&sheet=Notification')
                  .subscribe(res => {
                    let notification = res.json().Notification;
                    console.log(notification);
                    window.localStorage.setItem('notification', JSON.stringify(notification));
                    this.hideLoading();
                  });

  }
  private hideLoading(){
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }
}
