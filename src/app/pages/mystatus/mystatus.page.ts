import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystatus',
  templateUrl: './mystatus.page.html',
  styleUrls: ['./mystatus.page.scss'],
})
export class MystatusPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showChart();
  }
  showChart() {
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["VB 6", "PHP", "Delphi", ".Net", "TypeScript"],
        datasets: [{
              label: "This is chart",
              backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: [20, 5, 10, 25, 45],
              borderWidth: 1
        }]
       }
    });
  }
}
