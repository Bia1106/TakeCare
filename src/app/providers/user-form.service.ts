import { Injectable } from '@angular/core';
import { UserForm } from '../interfaces/user-form';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private firestore: AngularFirestore) { }

  cadastrar_form(formulario: UserForm){
    return this.firestore.collection('formulario').add(formulario);
  }
}
