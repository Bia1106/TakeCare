import { AuthenticationService } from './providers/authentication.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Notícias',
      url: '/app/tabs/news',
      icon: 'search'
    },
    {
      title: 'Chat Suporte',
      url: '/app/tabs/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Formulário',
      url: '/app/tabs/form-general-info',
      icon: 'clipboard'
    },
    {
      title: 'Meu Status',
      url: '/app/tabs/mystatus',
      icon: 'person-circle'
    },
    {
      title: 'Mapa',
      url: '/app/tabs/map',
      icon: 'map'
    }
  ];
  loggedIn = this.auth.IsLoggedIn();
  dark = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // isLogged(){
  //   if (this.auth.IsLoggedIn()) {
  //     return this.loggedIn = true;
  //   }else{
  //     return this.loggedIn;
  //   }
  // }
  ngOnInit() {
  }

}
