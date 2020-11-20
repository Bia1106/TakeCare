import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserOptions } from './../interfaces/user-options';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserData {

  constructor(private router : Router,
    private firestore: AngularFirestore,
    private afa:AngularFireAuth,
    private afs:AngularFirestore,) { }


    async cadastro(user: UserOptions){
      try {
        const newUser = await this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
        const newUserObj = Object.assign({},user);
        delete newUserObj.password;
        await this.afs.collection('users').doc(newUser.user.uid).set(newUserObj)
        console.log('Sucesso!');
      } catch (error) {
        console.error(error);
      }
  }
logout() {
  this.router.navigateByUrl('/login');
}
}
