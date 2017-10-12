import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class SportsPage {
  titles: string[];
  src : string[];
  items: Array<{title: string, src: string}>;
  constructor(public navCtrl: NavController) {
    this.titles = ['Badminton', 'Basketball', 'Cricket','Football','Hockey','Squash','Swimming','Tennis','TableTennis','VolleyBall','WaterPolo','Weightlifting'];
    this.src = ['./assets/img/badm.png','./assets/img/bask.png','./assets/img/cri.png','./assets/img/foot.png','./assets/img/hock.png','./assets/img/squa.png','./assets/img/swim.png','./assets/img/tenn.png','./assets/img/tt.png','./assets/img/volley.png','./assets/img/waterpolo.png','./assets/img/weight.png'];
    this.items = [];
    for(let i = 0; i <12; i++) {
      this.items.push({
        title: this.titles[i],
        src:this.src[i]
      });
    }
  }
itemSelected(item){
  this.navCtrl.push(ListPage, {
    item: item
  });
}
}
