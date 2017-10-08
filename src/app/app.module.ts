import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GalleryPage } from '../pages/gallery/gallery';
import { SportsPage } from '../pages/sports/sports';
import { ResultPage } from '../pages/result/result';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
import { MapsPage } from '../pages/maps/maps';
import { ContactUsPage } from '../pages/contactus/contactus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Youtube } from '../pipes/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GalleryPage,
    SportsPage,
    ResultPage,
    SponsorshipPage,
    MapsPage,
    ContactUsPage,
    Youtube
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpModule,
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
    MapsPage,
    ContactUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
