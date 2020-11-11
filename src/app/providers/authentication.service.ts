import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private logged: boolean = false;

  constructor(private fireAuth: AngularFireAuth) { }
  logIn(email: string, senha: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, senha);
  }
  logOut() {
    return this.fireAuth.auth.signOut();
  }
  IsLoggedIn() {
    return this.logged;
  }
  setUserLogged(value: boolean) {
    this.logged = value;
  }
}
