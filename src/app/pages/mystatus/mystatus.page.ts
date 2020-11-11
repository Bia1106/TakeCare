import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mystatus',
  templateUrl: './mystatus.page.html',
  styleUrls: ['./mystatus.page.scss'],
})
export class MystatusPage implements OnInit {
  @ViewChild("barCanvas",{static: true}) barCanvas: ElementRef;
  private barChart: Chart;
  constructor() { }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Temperatura média", "Média de horas fora de casa", "Sintoma mais frequênte"],
        datasets: [
          {
            label: "Médias de acordo com o formulário",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
 
