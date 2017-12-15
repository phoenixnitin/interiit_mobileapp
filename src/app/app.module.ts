import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LivePage} from '../pages/live/live';
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
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { MapsPage } from '../pages/maps/maps';
import { ContactUsPage } from '../pages/contactus/contactus';
import { NotificationPage } from '../pages/notification/notification';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push} from '@ionic-native/push';

//import { IonicImageViewerModule } from 'ionic-img-viewer';
import {PhotoViewer} from '@ionic-native/photo-viewer';
import { Youtube } from '../pipes/youtube/youtube';
import { GoogleMaps } from '../providers/google-maps/google-maps';
import { GoogleMapsCluster } from '../providers/google-maps-cluster/google-maps-cluster';
import { Connectivity } from '../providers/connectivity/connectivity';
import { VideoPlayer } from '@ionic-native/video-player';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivePage,
    GalleryPage,
    SportsPage,
    ResultPage,
    SponsorshipPage,
    MapsPage,
    ContactUsPage,
    Youtube,
    NotificationPage,
    SportAthletics,
    SportBadminton,
    SportBasketball,
    SportCricket,
    SportFootball,
    SportHockey,
    SportSquash,
    SportSwimming,
    SportTableTennis,
    SportTennis,
    SportVolleyball,
    SportWaterpolo,
    SportWeightlifting,
    SportAll,
    GeneralChampionship,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {navExitApp: true}),


    // IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivePage,
    GalleryPage,
    SportsPage,
    ResultPage,
    SponsorshipPage,
    MapsPage,

    ContactUsPage,
    NotificationPage,
    SportAthletics,
    SportBadminton,
    SportBasketball,
    SportCricket,
    SportFootball,
    SportHockey,
    SportSquash,
    SportSwimming,
    SportTableTennis,
    SportTennis,
    SportVolleyball,
    SportWaterpolo,
    SportWeightlifting,
    SportAll,
    GeneralChampionship,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Connectivity,
    PhotoViewer,
    VideoPlayer,
    YoutubeVideoPlayer,
    GoogleMapsCluster,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
