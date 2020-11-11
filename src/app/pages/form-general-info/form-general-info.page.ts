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
  form: UserForm = { form_sair_casa: '', form_trasporte: '',form_temperatura1:'',form_temperatura2:'',item:'',item2:'',item3:''};
  items= [
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
      nome:"Nenhum dos sintomas acima"
    }
  ];
  items2= [
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
  items3= [
    {
      resp: "Sim"
    },
    {
      resp: "Nao"
    }
  ];
  constructor(private router: Router,
              private userFormulario: UserFormService) { }

  ngOnInit() {
  }
  OnForm() {
    this.userFormulario.cadastrar_form(this.form).then((data) => {
      alert('Agradecemos o feedback! =D');
      // this.router.navigateByUrl('/app/tabs/map');
    }).catch((erro) => {
      console.error(erro);
    })
}
}
