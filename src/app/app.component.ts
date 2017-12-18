import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GalleryPage } from '../pages/gallery/gallery';
import { SportsPage } from '../pages/sports/sports';
import { ResultPage } from '../pages/result/result';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
import {SportAthletics} from '../pages/sports/allpages/Athletics/athletics';
import {SportBadminton} from '../pages/sports/allpages/Badminton/badminton';
import {SportBasketball} from '../pages/sports/allpages/Basketball/basketball';
import {SportCricket} from '../pages/sports/allpages/Cricket/cricket';
import {SportFootball} from '../pages/sports/allpages/Football/football';
import {SportHockey} from '../pages/sports/allpages/Hockey/hockey';
import {SportSquash} from '../pages/sports/allpages/Squash/squash';
import {SportSwimming} from '../pages/sports/allpages/Swimming/swimming';
import {SportTableTennis} from '../pages/sports/allpages/Table Tennis/tabletennis';
import {SportTennis} from '../pages/sports/allpages/Tennis/tennis';
import {SportVolleyball} from '../pages/sports/allpages/Volleyball/volleyball';
import {SportWaterpolo} from '../pages/sports/allpages/Waterpolo/waterpolo';
import {SportWeightlifting} from '../pages/sports/allpages/Weightlifting/weightlifting';
import {GeneralChampionship} from '../pages/sports/allpages/GeneralChampionship/GeneralChampionship';
import { SportAll } from '../pages/sports/All_sports/all_sports';
import {LivePage}from'../pages/live/live';
import { MapsHomePage } from '../pages/mapshome/mapshome';
import { MapsFreeRoam } from '../pages/mapsfreeroam/mapsfreeroam';
import { MapsRoot } from '../pages/mapsroot/mapsroot';
import { ContactUsPage } from '../pages/contactus/contactus';
import { NotificationPage } from '../pages/notification/notification';
import { OLAPedalPage } from '../pages/ola/ola';
import { FanmodePage } from '../pages/fanmode/fanmode';
import { TodayEvent } from '../pages/sports/allpages/today-event/today-event';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;
  pages: Array<{title: string, component: any, icon:string}>;
  private resetBackButton: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {
    this.initializeApp();
    // if(this.nav.length() == 1){
    //
    // }
    // this.platform.registerBackButtonAction(this.exit);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      // { title: 'List', component: ListPage ,icon:'home'},
      { title: 'Gallery', component: GalleryPage ,icon:'photos' },
      { title: 'Sports', component: SportsPage ,icon:'american-football' },
      // { title: 'Results', component: ResultPage ,icon:'home' },
      { title: 'Live', component:LivePage ,icon:'logo-youtube' },
      { title: 'Fanmode', component: FanmodePage, icon:'md-wifi'},
      { title: 'Navigation', component: MapsRoot ,icon:'navigate'},
      { title: 'Take a Ride', component: OLAPedalPage ,icon:'bicycle'},
      { title: 'Contact Us', component: ContactUsPage ,icon:'contacts'},
      { title: 'Notification', component: NotificationPage, icon:'md-notifications'}
    ];
    this.activePage=this.pages[0];

  }

  returnPage(page){
    let that = this;
      switch(page){
        case 'NotificationPage': {if(that.nav.getActive().name !=='NotificationPage')
          that.nav.push(NotificationPage);
          else{
            that.nav.pop(NotificationPage);
            that.nav.push(NotificationPage);
        }
                              }break;
        case 'HomePage': {if(that.nav.getActive().name !=='HomePage')
        that.nav.push(HomePage);
      else{
        that.nav.pop(HomePage);
        that.nav.push(HomePage);
    }
  }break;
        case 'GalleryPage': {if(that.nav.getActive().name !=='GalleryPage')
        that.nav.push(GalleryPage);
      else{
        that.nav.pop(GalleryPage);
        that.nav.push(GalleryPage);
    }
  }break;
        case 'SportsPage': {if(that.nav.getActive().name !=='SportsPage')
        that.nav.push(SportsPage);
      else{
        that.nav.pop(SportsPage);
        that.nav.push(SportsPage);
    }
  }break;
        case 'LivePage': {if(that.nav.getActive().name !=='LivePage')
        that.nav.push(LivePage);
      else{
        that.nav.pop(LivePage);
        that.nav.push(LivePage);
    }
  }break;
        case 'MapsHomePage': {if(that.nav.getActive().name !=='MapsHomePage')
        that.nav.push(MapsHomePage);
      else{
        that.nav.pop(MapsHomePage);
        that.nav.push(MapsHomePage);
    }
  }break;
        case 'MapsFreeRoam': {if(that.nav.getActive().name !=='MapsFreeRoam')
        that.nav.push(MapsFreeRoam);
      else{
        that.nav.pop(MapsFreeRoam);
        that.nav.push(MapsFreeRoam);
    }
  }break;
        case 'MapsRoot': {if(that.nav.getActive().name !=='MapsRoot')
        that.nav.push(MapsRoot);
      else{
        that.nav.pop(MapsRoot);
        that.nav.push(MapsRoot);
    }
  }break;
        case 'OLAPedalPage': {if(that.nav.getActive().name !=='OLAPedalPage')
        that.nav.push(OLAPedalPage);
      else{
        that.nav.pop(OLAPedalPage);
        that.nav.push(OLAPedalPage);
    }
  }break;
        case 'ContactUsPage': {if(that.nav.getActive().name !=='ContactUsPage')
        that.nav.push(ContactUsPage);
      else{
        that.nav.pop(ContactUsPage);
        that.nav.push(ContactUsPage);
    }
  }break;
        case 'SportAthletics': {if(that.nav.getActive().name !=='SportAthletics')
        that.nav.push(SportAthletics);
      else{
        that.nav.pop(SportAthletics);
        that.nav.push(SportAthletics);
    }
  }break;
        case 'SportBadminton': {if(that.nav.getActive().name !=='SportBadminton')
        that.nav.push(SportBadminton);
      else{
        that.nav.pop(SportBadminton);
        that.nav.push(SportBadminton);
    }
  }break;
        case 'SportBasketball': {if(that.nav.getActive().name !=='SportBasketball')
        that.nav.push(SportBasketball);
      else{
        that.nav.pop(SportBasketball);
        that.nav.push(SportBasketball);
    }
  }break;
        case 'SportCricket': {if(that.nav.getActive().name !=='SportCricket')
        that.nav.push(SportCricket);
      else{
        that.nav.pop(SportCricket);
        that.nav.push(SportCricket);
    }
  }break;
        case 'SportFootball': {if(that.nav.getActive().name !=='SportFootball')
        that.nav.push(SportFootball);
      else{
        that.nav.pop(SportFootball);
        that.nav.push(SportFootball);
    }
  }break;
        case 'SportHockey': {if(that.nav.getActive().name !=='SportHockey')
        that.nav.push(SportHockey);
      else{
        that.nav.pop(SportHockey);
        that.nav.push(SportHockey);
    }
  }break;
        case 'SportSquash': {if(that.nav.getActive().name !=='SportSquash')
        that.nav.push(SportSquash);
      else{
        that.nav.pop(SportSquash);
        that.nav.push(SportSquash);
    }
  }break;
        case 'SportSwimming': {if(that.nav.getActive().name !=='SportSwimming')
        that.nav.push(SportSwimming);
      else{
        that.nav.pop(SportSwimming);
        that.nav.push(SportSwimming);
    }
  }break;
        case 'SportTableTennis': {if(that.nav.getActive().name !=='SportTableTennis')
        that.nav.push(SportTableTennis);
      else{
        that.nav.pop(SportTableTennis);
        that.nav.push(SportTableTennis);
    }
  }break;
        case 'SportTennis': {if(that.nav.getActive().name !=='SportTennis')
        that.nav.push(SportTennis);
      else{
        that.nav.pop(SportTennis);
        that.nav.push(SportTennis);
    }
  }break;
        case 'SportVolleyball': {if(that.nav.getActive().name !=='SportVolleyball')
        that.nav.push(SportVolleyball);
      else{
        that.nav.pop(SportVolleyball);
        that.nav.push(SportVolleyball);
    }
  }break;
        case 'SportWaterpolo': {if(that.nav.getActive().name !=='SportWaterpolo')
        that.nav.push(SportWaterpolo);
      else{
        that.nav.pop(SportWaterpolo);
        that.nav.push(SportWaterpolo);
    }
  }break;
        case 'SportWeightlifting': {if(that.nav.getActive().name !=='SportWeightlifting')
        that.nav.push(SportWeightlifting);
      else{
        that.nav.pop(SportWeightlifting);
        that.nav.push(SportWeightlifting);
    }
  }break;
        case 'GeneralChampionship': {if(that.nav.getActive().name !=='GeneralChampionship')
        that.nav.push(GeneralChampionship);
      else{
        that.nav.pop(GeneralChampionship);
        that.nav.push(GeneralChampionship);
    }
  }break;
        case 'TodayEvent': {if(that.nav.getActive().name !=='TodayEvent')
        that.nav.push(TodayEvent);
      else{
        that.nav.pop(TodayEvent);
        that.nav.push(TodayEvent);
    }
  }break;
        case 'FanmodePage': {if(that.nav.getActive().name !=='FanmodePage'){
        that.nav.push(FanmodePage);
          }
      else{
        that.nav.pop(FanmodePage);
        that.nav.push(FanmodePage);
    }
  }break;
        case 'play': {window.location.href="https://play.google.com/store/apps/details?id=com.interiit.android"}break;
        default : that.nav.push(NotificationPage);
      }
    }

  initializeApp() {

    var that = this;
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushsetup();
       if(typeof(FCMPlugin) !== "undefined"){
        FCMPlugin.getToken(function(t){
          console.log("Use this token for sending device specific messages\nToken: " + t);
          FCMPlugin.subscribeToTopic("msgall");
        }, function(e){
          console.log("Uh-Oh!\n"+e);
        });

        FCMPlugin.onNotification(function(d){
          console.log("notification",d);
          if(d.wasTapped){
            // Background recieval (Even if app is closed),
            //   bring up the message in UI
            console.log('notification tapped');
            that.returnPage(d.page);
            // if (d.page == 'play'){window.location.href="https://play.google.com/store/apps/details?id=com.interiit.android"}

          } else {
            // Foreground recieval, update UI or what have you...
            console.log('notification tapped:else : older');
            let youralert = that.alertCtrl.create({
          title: 'Notification',
          message: d.message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Take me there',
              handler: () => {
                console.log(that.nav.getActive().name);
                that.returnPage(d.page);
                // if(d.page === 'home')
                //   that.nav.push(HomePage);
                // else if (d.page == 'play'){window.location.href="https://play.google.com/store/apps/details?id=com.interiit.android"}

                console.log('Notification clicked');
              }
            }
          ]
        });
        youralert.present();
          }
        }, function(msg){
          // No problemo, registered callback
          console.log(msg);
        }, function(err){
          console.log("Arf, no good mate... " + err);
        });
      } else console.log("Notifications disabled, only provided in Android/iOS environment");
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
    // this.activePage=page;
  }
  checkActive(page){
    return page==this.activePage;
  }
  pushsetup() {
    const options: PushOptions = {
       android: {
           // senderID: '255556131441'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       },
       windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    let that = this;
    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'Notification',
          message: notification.message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Take me there',
              handler: () => {
                console.log(this.nav.getActive().name);
                // if(this.nav.getActive().name !=='NotificationPage')
                //   this.nav.push(NotificationPage);
                // else{
                //   this.nav.pop(NotificationPage);
                //   this.nav.push(NotificationPage);
                // }
                that.returnPage(notification.page);
                console.log('Notification clicked');
              }
            }
          ]
        });
        youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
       //do whatever you want with the registration ID
    });

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
  exitApp(){
    console.log(this.nav.length());
    let that = this;
    console.log("exit alert");
    let alert = this.alertCtrl.create({
          title: 'Exit',
          message: 'Do you want to exit?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Exit',
              handler: () => {
                console.log('Exit clicked');
                that.platform.exitApp();
              }
            }
          ]
        });
    alert.present();
  }


}
