import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items= [
    {
      image: 'assets/img/download.jpg' ,
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Pernambuco tem 156.029 casos da Covid-19 e 8.487 mortes, depois de registrar mais 106 infectados e sete óbitos."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Últimas notícias sobre o coronavírus e a crise política no Brasil."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Vacina chinesa é segura e eficaz, aponta resultado publicado na The Lancet."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Estudo comprova presença do coronavírus no cérebro de pacientes."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Europa passa dos 250 mil mortos pelo novo coronavírus."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Coronavírus sobrevive na pele cinco vezes mais que a gripe, diz estudo."
    },
    {
      image: 'assets/img/download.jpg',
      subtitle: "Destination",
      title: "Corona Virus - Updates",
      content: "Coronavírus sobrevive na pele cinco vezes mais que a gripe, diz estudo."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
