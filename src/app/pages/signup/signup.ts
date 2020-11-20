import { UserOptions } from './../../interfaces/user-options';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
// ONDE TEM COMENTÁRIOS, TIRANDO O MÉTODO ONSIGNUP(), SÃO COISAS DO FORMULÁRIO QUE DEPOIS VOU IMPLEMENTAR!!!!!
export class SignupPage {
  signUp: FormGroup;
  signInData: any;

  constructor(
    public router: Router,
    public userData: UserData,
    private formBulder: FormBuilder
  ) { }

  ngOnInit() {
    this.signUp = this.formBulder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      password: ['', Validators.required],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      idade: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])],
      dataNasc: ['', Validators.required],
      tipoSangue: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3)])],
      sexo: ['', Validators.required],
    });

  }

  // onSignup() {
  //     this.userData.cadastrar(this.signup).then((data) => {
  //       console.log('cliente cadastrado', data);
  //       this.router.navigateByUrl('/app/tabs/map');
  //     }).catch((erro) => {
  //       console.error(erro);
  //     })
  // }

  onSignup() {
    if (this.signUp.invalid || this.signUp.pending) {
      alert('Fomrulário inválido!');
    } else {
      this.signInData = this.signUp.value;
      this.signUpMethod();
    }
  }
  signUpMethod() {
    this.userData.cadastro(this.signInData);
    this.router.navigateByUrl('login');
  }

}