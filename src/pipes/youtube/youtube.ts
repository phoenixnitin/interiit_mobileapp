import {Injectable, Pipe } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class Youtube {

  constructor(private dom: DomSanitizer){

  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
