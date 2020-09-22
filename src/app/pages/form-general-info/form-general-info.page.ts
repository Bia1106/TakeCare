import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-general-info',
  templateUrl: './form-general-info.page.html',
  styleUrls: ['./form-general-info.page.scss'],
})
export class FormGeneralInfoPage implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
