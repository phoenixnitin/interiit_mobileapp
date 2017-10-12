import { Component,OnInit} from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import {Http} from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage {
  cores: Array<object>;
  loading:any;
          constructor(private _http: Http,public loadingCtrl: LoadingController, public nav: NavController){
  
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
            })
            this.loading.present(this.loading)
            this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Core')
                          .subscribe(res => {
                            this.cores = res.json().Core
                            this.hideLoading();
                          });
                                       
          }
          private hideLoading(){
            setTimeout(() => {
              this.loading.dismiss();
            },);;
          }
        }