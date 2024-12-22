import { Component, OnInit } from '@angular/core';
import { Chart, registerables  } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  // Chart.js data

  constructor() { }

  ngOnInit() 
  {
      Chart.register(...registerables);
      this.createChartBar();
      this.createChartTorta();
  }

  createChartBar()
  {
    const ctx = document.getElementById('barChartBar') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Etichette
        datasets: [
          {
            label: 'Valori di esempio',
            data: [12, 19, 3, 5, 2, 3], // Dati
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createChartTorta()
  {
    const ctx = document.getElementById('barChartTorta') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie', // Tipo di grafico
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], // Etichette
        datasets: [
          {
            label: 'Distribuzione percentuale',
            data: [20, 30, 10, 25, 15], // Valori
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' // Posizione della legenda
          },
          tooltip: {
            enabled: true // Tooltip per ogni fetta
          }
        }
      }
    });
  }

}
