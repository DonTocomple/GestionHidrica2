import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  cards = [
    { id: 'barChart1', title: 'Humedad' },
    { id: 'barChart2', title: 'Volumen' },
    { id: 'lineChart1', title: 'Temperatura' },
    { id: 'lineChart2', title: 'Q' },
    { id: 'barChart3', title: 'Tiempo' },
    { id: 'randomValues', title: 'Últimos Valores' }
  ];

  randomValues: { label: string, value: number }[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createBarChart1();
    this.createBarChart2();
    this.createLineChart1();
    this.createLineChart2();
    this.createBarChart3();
    this.generateRandomValues();
  }

  createBarChart1() {
    const ctx = document.getElementById('barChart1') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Pulso ${i + 1}`),
        datasets: [{
          label: 'Humedad (%)',
          data: [25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createBarChart2() {
    const ctx = document.getElementById('barChart2') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Pulso ${i + 1}`),
        datasets: [{
          label: 'Volumen (m^3)',
          data: [0.5, 0.4, 0.5, 0.4, 0.5, 0.5, 0.5, 0.5, 0.6, 0.7, 0.6, 0.6, 0.6, 0.4, 0.3, 0.2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.4, 0.3, 0.3, 0.2, 0.2, 0.1, 0],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createLineChart1() {
    const ctx = document.getElementById('lineChart1') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Pulso ${i + 1}`),
        datasets: [{
          label: 'Temperatura (°C)',
          data: [14, 13, 16, 12, 13, 12.7, 12.4, 12.1, 11.8, 11.5, 11.2, 10.9, 10.6, 10.3, 10, 9.7, 9.4, 9.1, 8.8, 8.5, 8.2, 7.9, 7.6, 7.3, 7, 6.7, 6.4, 6.1, 5.8, 5.5],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createLineChart2() {
    const ctx = document.getElementById('lineChart2') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Pulso ${i + 1}`),
        datasets: [{
          label: 'Q',
          data: [0.50, 0.67, 0.71, 0.80, 0.50, 1.25, 0.50, 0.50, 3.00, 1.40, 3.00, 0.86, 0.75, 0.40, 0.30, 0.20, 0.50, 0.83, 0.63, 0.56, 0.50, 0.40, 0.40, 1.33, 0.30, 0.30, 0.20, 0.20, 0.10, 0.00],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createBarChart3() {
    const ctx = document.getElementById('barChart3') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Pulso ${i + 1}`),
        datasets: [{
          label: 'Tiempo (s)',
          data: [1.00, 0.60, 0.70, 0.50, 1.00, 0.40, 1.00, 1.00, 0.20, 0.50, 0.20, 0.70, 0.80, 1.00, 1.00, 1.00, 1.00, 0.60, 0.80, 0.90, 1.00, 1.00, 1.00, 0.30, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generateRandomValues() {
    const humidity = this.getRandomNumber(25, 83);
    const volume = this.getRandomNumber(0, 0.7);
    const temperature = this.getRandomNumber(5.5, 14);
    const q = this.getRandomNumber(0, 3);
    const time = this.getRandomNumber(0.2, 1);

    this.randomValues = [
      { label: 'Humedad', value: humidity },
      { label: 'Volumen', value: volume },
      { label: 'Temperatura', value: temperature },
      { label: 'Q', value: q },
      { label: 'Tiempo', value: time }
    ];
  }

  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
