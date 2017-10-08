import { Component,OnInit} from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactUsPage implements OnInit{
  cores: Array<object>;
          constructor(private _http: Http){
  
          }
          ngOnInit(){
                  //-----------Main Code for Service---------//
                  this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1WjO92CQ-BLEqGuqZXzSo-wqTx6YE5PZrRpFtSHhxv-c&sheet=Core')
                              .subscribe(res => {
                                  this.cores = res.json().Core;
                                  // console.log(this.cores);
                              });
              }
  
  }