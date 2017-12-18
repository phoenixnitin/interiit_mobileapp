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
import {GeneralChampionship} from '../sports/allpages/GeneralChampionship/GeneralChampionship';
import {TodayEvent} from '../sports/allpages/today-event/today-event';

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
      if(item === 'Athletics'){this.navCtrl.push(SportAthletics);}
      else if (item === 'Badminton'){this.navCtrl.push(SportBadminton);}
      else if (item === 'Basketball'){this.navCtrl.push(SportBasketball);}
      else if (item === 'Cricket'){this.navCtrl.push(SportCricket);}
      else if (item === 'Football'){this.navCtrl.push(SportFootball);}
      else if (item === 'Hockey'){this.navCtrl.push(SportHockey);}
      else if (item === 'Squash'){this.navCtrl.push(SportSquash);}
      else if (item === 'Swimming'){this.navCtrl.push(SportSwimming);}
      else if (item === 'Tennis'){this.navCtrl.push(SportTennis);}
      else if (item === 'TableTennis'){this.navCtrl.push(SportTableTennis);}
      else if (item === 'Volleyball'){this.navCtrl.push(SportVolleyball);}
      else if (item === 'Waterpolo'){this.navCtrl.push(SportWaterpolo);}
      else if (item === 'Weightlifting'){this.navCtrl.push(SportWeightlifting);}
      else if (item === 'GeneralChampionship'){this.navCtrl.push(GeneralChampionship);}
      else if (item === 'today-matches'){this.navCtrl.push(TodayEvent);}

    }
  else{
      this.navCtrl.push(ListPage);
    }
}
}
