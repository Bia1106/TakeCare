import { UserLogin } from './../../interfaces/user-options';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { AuthenticationService } from '../../providers/authentication.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  // login: UserLogin = { email: '', password: ''};
  public email: string = '';
  public password: string = '';

  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private auth: AuthenticationService
  ) {
    this.auth.logOut().then((data)=>{
      this.auth.setUserLogged(false);
    }).catch((error)=>{
      console.log('Erro logout:',error);
    });
   }

  onLogin() {
    this.auth.logIn(this.email, this.password).then((data) => {
      console.log('data', data);
      this.auth.setUserLogged(true);
      this.router.navigateByUrl('/app/tabs/map');
    }).catch((error) => {
      console.log('Erro no login:', error);
    });

  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
