import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GalleryPage } from '../pages/gallery/gallery';
import { SportsPage } from '../pages/sports/sports';
import { ResultPage } from '../pages/result/result';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
//import { MapsPage } from '../pages/maps/maps';
import { ContactUsPage } from '../pages/contactus/contactus';
declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;
  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      // { title: 'List', component: ListPage ,icon:'home'},
      { title: 'Gallery', component: GalleryPage ,icon:'photos' },
      { title: 'Sports', component: SportsPage ,icon:'home' },
      { title: 'Results', component: ResultPage ,icon:'home' },
      { title: 'Sponsorship', component: SponsorshipPage ,icon:'home' },
      //{ title: 'Maps', component: MapsPage ,icon:'home'},
      { title: 'Contact Us', component: ContactUsPage ,icon:'contacts'},
    ];
    this.activePage=this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

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
          } else {
            // Foreground recieval, update UI or what have you...
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
    this.nav.setRoot(page.component);
    this.activePage=page;
  }
  checkActive(page){
    return page==this.activePage;
  }
}
