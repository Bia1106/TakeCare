import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
// ONDE TEM COMENTÁRIOS, TIRANDO O MÉTODO ONSIGNUP(), SÃO COISAS DO FORMULÁRIO QUE DEPOIS VOU IMPLEMENTAR!!!!!
export class SignupPage {
  signup: UserOptions = { username: '', password: '', nome: '',email:'', idade: 0, dataNasc: '', tipoSangue: '', sexo: ''};
  // signUp : FormGroup;
  constructor(
    public router: Router,
    public userData: UserData,
    private afa:AngularFireAuth,
    private afs:AngularFirestore,
    private formBulder:FormBuilder
  ) { }

  ngOnInit(){
    // this.signUp = this.formBulder.group({
    //   username: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(100)]) ],
    //   password: ['', Validators.required],
    //   nome: ['', Validators.required],
    //   email: ['',Validators.compose([ Validators.required,Validators.email])],
    //   idade: [0,Validators.compose([ Validators.required, Validators.min(0)])],
    //   dataNasc: ['', Validators.required],
    //   tipoSangue: ['', Validators.required],
    //   sexo: ['', Validators.required],
    // });
  }

  // onSignup() {
  //     this.userData.cadastrar(this.signup).then((data) => {
  //       console.log('cliente cadastrado', data);
  //       this.router.navigateByUrl('/app/tabs/map');
  //     }).catch((erro) => {
  //       console.error(erro);
  //     })
  // }
  async onSignup(){
    // if (this.signUp.invalid || this.signUp.pending) {
    //   return ;
    // }
    try {
      // const signInData = this.signUp.value;
      const newUser = await this.afa.auth.createUserWithEmailAndPassword(this.signup.email, this.signup.password);
      const newUserObj = Object.assign({},this.signup);
      delete newUserObj.password;
      await this.afs.collection('users').doc(newUser.user.uid).set(newUserObj)
      console.log('Sucesso!');
      this.router.navigateByUrl('login');
    } catch (error) {
      console.error(error);
    }
  }
}