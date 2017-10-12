import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage implements OnInit{
  gallery: string = "photos";
  isAndroid: boolean = false;
  imageArray;
  videoArray;
  constructor(private _http : Http){

  }
  // onclick(){
  //     console.log(this.imageArray);
  // }

  ngOnInit(){

          
          this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Image')
                              .subscribe(res => {
                                  this.imageArray = res.json().Image;
                              });
                            

 
 
    

        this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Video')
            .subscribe(res => {
                this.videoArray = res.json().Video;
            });
          }
        
  
}
