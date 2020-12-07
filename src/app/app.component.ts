import { AuthenticationService } from './providers/authentication.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
