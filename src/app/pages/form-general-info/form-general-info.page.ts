import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserFormService } from './../../providers/user-form.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserForm } from '../../interfaces/user-form';

@Component({
  selector: 'app-form-general-info',
  templateUrl: './form-general-info.page.html',
  styleUrls: ['./form-general-info.page.scss'],
})
export class FormGeneralInfoPage implements OnInit {
  form: FormGroup;
  items = [
    {
      nome: "Febre"
    },
    {
      nome: "Tosse Seca"
    },
    {
      nome: "Cansaço"
    },
    {
      nome: "Nenhum dos sintomas acima"
    }
  ];
  items2 = [
    {
      tempo: "< 20 min"
    },
    {
      tempo: "20 min"
    },
    {
      tempo: "1 hora"
    },
    {
      tempo: "> 1 hora"
    }
  ];
  items3 = [
    {
      resp: "Sim"
    },
    {
      resp: "Nao"
    }
  ];
  constructor(private router: Router,
    private userFormulario: UserFormService,
    private formBulder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBulder.group({
      form_sair_casa: ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(3)])],
      form_trasporte: ['', Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)])],
      form_temperatura1: ['', Validators.required],
      form_temperatura2: ['', Validators.required],
      item2: ['', Validators.required],
      item3: ['', Validators.required],
      item: ['', Validators.required]
    });
  }
  OnForm() {
    if (this.form.invalid || this.form.pending) {
      alert('Fomulário inválido!');
    }
    let formData = this.form.value;

    this.userFormulario.cadastrar_form(formData).then((data) => {
      alert('Agradecemos o feedback! =D');
      this.form.reset(); 
    }).catch((erro) => {
      console.error(erro);
    })
  }
}
