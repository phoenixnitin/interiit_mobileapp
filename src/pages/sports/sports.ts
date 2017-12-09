import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {SportAthletics} from '../sports/allpages/Athletics/athletics';
import {SportBadminton} from '../sports/allpages/Badminton/badminton';
import {SportBasketball} from '../sports/allpages/Basketball/basketball';
import {SportCricket} from '../sports/allpages/Cricket/cricket';
import {SportFootball} from '../sports/allpages/Football/football';
import {SportHockey} from '../sports/allpages/Hockey/hockey';
import {SportSquash} from '../sports/allpages/Squash/squash';
import {SportSwimming} from '../sports/allpages/Swimming/swimming';
import {SportTableTennis} from '../sports/allpages/Table Tennis/tabletennis';
import {SportTennis} from '../sports/allpages/Tennis/tennis';
import {SportVolleyball} from '../sports/allpages/Volleyball/volleyball';
import {SportWaterpolo} from '../sports/allpages/Waterpolo/waterpolo';
import {SportWeightlifting} from '../sports/allpages/Weightlifting/weightlifting';
import {SportAll} from '../sports/All_sports/all_sports';
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class SportsPage {
  titles: string[];
  src : string[];
  items: Array<{title: string, src: string}>;
  constructor(public navCtrl: NavController) {
    // this.titles = ['Badminton', 'Basketball', 'Cricket','Football','Hockey','Squash','Swimming','Tennis','TableTennis','VolleyBall','WaterPolo','Weightlifting'];
    // this.src = ['./assets/img/badm.png','./assets/img/bask.png','./assets/img/cri.png','./assets/img/foot.png','./assets/img/hock.png','./assets/img/squa.png','./assets/img/swim.png','./assets/img/tenn.png','./assets/img/tt.png','./assets/img/volley.png','./assets/img/waterpolo.png','./assets/img/weight.png'];
    // this.items = [];
    // for(let i = 0; i <12; i++) {
    //   this.items.push({
    //     title: this.titles[i],
    //     src:this.src[i]
    //   });
    // }
  }
itemSelected(item){
    console.log(item);
    if(navigator.onLine == true){
      if(item === 'Athletics'){this.navCtrl.push(SportAll, {'sport_name':'Athletics'});}
      else if (item === 'Badminton'){this.navCtrl.push(SportAll, {'sport_name':'Badminton'});}
      else if (item === 'Basketball'){this.navCtrl.push(SportAll, {'sport_name':'Basketball'});}
      else if (item === 'Cricket'){this.navCtrl.push(SportAll, {'sport_name':'Cricket'});}
      else if (item === 'Football'){this.navCtrl.push(SportAll, {'sport_name':'Football'});}
      else if (item === 'Hockey'){this.navCtrl.push(SportAll, {'sport_name':'Hockey'});}
      else if (item === 'Squash'){this.navCtrl.push(SportAll, {'sport_name':'Squash'});}
      else if (item === 'Swimming'){this.navCtrl.push(SportAll, {'sport_name':'Swimming'});}
      else if (item === 'Tennis'){this.navCtrl.push(SportAll, {'sport_name':'Tennis'});}
      else if (item === 'TableTennis'){this.navCtrl.push(SportAll, {'sport_name':'Table Tennis'});}
      else if (item === 'Volleyball'){this.navCtrl.push(SportAll, {'sport_name':'Volleyball'});}
      else if (item === 'Waterpolo'){this.navCtrl.push(SportAll, {'sport_name':'Waterpolo'});}
      else if (item === 'Weightlifting'){this.navCtrl.push(SportAll, {'sport_name':'Weightlifting'});}

    }
  else{
      this.navCtrl.push(ListPage);
    }
}
}
