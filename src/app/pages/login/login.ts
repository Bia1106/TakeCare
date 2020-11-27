import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  login: FormGroup;


  constructor(
    public userData: UserData,
    public router: Router,
    private auth: AuthenticationService,
    private formBulder: FormBuilder
  ) {
    this.auth.logOut().then((data) => {
      this.auth.setUserLogged(false);
    }).catch((error) => {
      console.log('Erro logout:', error);
    });
  }
  ngOnInit() {
    this.login = this.formBulder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.login.invalid || this.login.pending) {
      alert('Login inválido!');
    }
    let loginData = this.login.value;

    this.auth.logIn(loginData).then((data) => {
      console.log('data', data);
      this.auth.setUserLogged(true);
      this.router.navigateByUrl('/app/tabs/map');
    }).catch((error) => {
      alert('Email ou senha inválidos!');
      window.location.reload();
    });


  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
