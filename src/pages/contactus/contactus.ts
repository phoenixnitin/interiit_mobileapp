import { Component,OnInit, OnDestroy} from '@angular/core';
import { NavController ,AlertController, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage implements OnDestroy{
  cores: Array<object>;
  coresOffline: Array<object>;
  loading:any;
          constructor(private _http: Http,public loadingCtrl: LoadingController, public nav: NavController){
            this.coresOffline = JSON.parse(localStorage.getItem('contactus'));
          }
  //         ngOnInit() {
  //           let loader = this.loading.create({
  //             content: 'Getting Details...',
  //           });

  //           loader.present().then(() => {
  //             this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Core')
  //               .subscribe(res => {
  //                 this.cores = res.json().Core;
  //               });
  //               setTimeout(() => {
  //                 loader.dismiss();
  //               }, 9000);
  //           });
  //         }
          ionViewWillEnter(){
            this.getdata();
          }
          getdata(){
            this.loading = this.loadingCtrl.create({
              content: 'Please wait..',
              spinner: 'crescent'
            });
            this.loading.present(this.loading);
            if(navigator.onLine) {
              this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Core')
                .subscribe(res => {
                  this.cores = res.json().Core;
                  this.coresOffline = this.cores;
                  localStorage.setItem('contactus', JSON.stringify(this.cores));
                  this.hideLoading();
                }, error => {
                  this.coresOffline = JSON.parse(localStorage.getItem('contactus'));
                  this.hideLoading();
                });
            }
            else{
              this.coresOffline = JSON.parse(localStorage.getItem('contactus'));
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
