import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GalleryPage } from '../pages/gallery/gallery';
import { SportsPage } from '../pages/sports/sports';
import { ResultPage } from '../pages/result/result';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
// import { MapsPage } from '../pages/maps/maps';
import { ContactUsPage } from '../pages/contactus/contactus';
import { NotificationPage } from '../pages/notification/notification';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push} from '@ionic-native/push';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import {PhotoViewer} from '@ionic-native/photo-viewer';
import { Youtube } from '../pipes/youtube/youtube';
// import { GoogleMaps } from '../providers/google-maps/google-maps';
// import { GoogleMapsCluster } from '../providers/google-maps-cluster/google-maps-cluster';
import { Connectivity } from '../providers/connectivity/connectivity';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GalleryPage,
    SportsPage,
    ResultPage,
    SponsorshipPage,
    // MapsPage,
    ContactUsPage,
    Youtube,
    NotificationPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GalleryPage,
    SportsPage,
    ResultPage,
    SponsorshipPage,
    // MapsPage,

    ContactUsPage,
    NotificationPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // GoogleMaps,
    Connectivity,
    PhotoViewer,
    // GoogleMapsCluster
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
