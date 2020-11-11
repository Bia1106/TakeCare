import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserOptions } from './../interfaces/user-options';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserData {

  constructor(private router : Router,
    private firestore: AngularFirestore) { }
cadastrar(user: UserOptions){
  return this.firestore.collection('users').add(user);
}
logout() {
  this.router.navigateByUrl('/login');
}
}
