import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  items= [
    {
      image: 'assets/img/appicon.png' ,
      subtitle: "Destination",
      title: "New York",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "L.A",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "Texas",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "L.A",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "L.A",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "L.A",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    },
    {
      image: 'assets/img/appicon.png',
      subtitle: "Destination",
      title: "L.A",
      content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
