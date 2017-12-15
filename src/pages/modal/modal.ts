import {Component} from '@angular/core';
import { ViewController, ActionSheetController, NavParams } from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
import {File} from '@ionic-native/file';
import { Http } from '@angular/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
    selector:'page-modal',
    templateUrl:'./modal.html'
})

export class ModalPage{
ind;
imageCounter;
imageArray: any;
fileTransfer: FileTransferObject = this.transfer.create();

    constructor(public viewController: ViewController,
                public actionSheetCtrl: ActionSheetController,
                public params: NavParams,
                private _http: Http,
                private socialSharing: SocialSharing,
                private transfer: FileTransfer,
                private file: File
            ){
        console.log(params.get('ind'));
         this.ind = this.params.get('ind');
         this.imageCounter = this.params.get('imageCounter');
    this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Image')
  .subscribe(res => {
    this.imageArray = res.json().Image;
  });
    }
    nextimg() {
        console.log("next image req")
        {
            if (this.ind == this.imageArray.length - 1) {
                this.ind = 0;
            }
            else {
              if(this.ind < this.imageCounter-1)
                this.ind = this.ind + 1;
              else
                this.ind = 0;
            }
        }
    }

    previmg() {
        {
            if (this.ind == 0) {
              if(this.imageArray.length - 1 > this.imageCounter)
                this.ind = this.imageCounter-1;
              else
                this.ind = this.imageArray.length - 1;
            }
            else {
                this.ind = this.ind - 1;
            }
        }
        console.log("prev image")
    }
    closemodal(){
        this.viewController.dismiss();
    }

    share(ind){
        this.socialSharing.share('','',this.imageArray[ind].imageURL,'');
    }

    // saveimage(ind){
    //     const url = this.imageArray[ind].imageURL;
    //     console.log(url);
    //     this.fileTransfer.download(url,this.file.externalDataDirectory + 'image'+ind+'.jpg')
    //                                 .then((entry) => {
    //                                     alert('')
    //                                     console.log('download complete: ' + entry.toURL());
    //                                     }, (error) => {
    //                                     // handle error
    //                                 });
    // }
}
