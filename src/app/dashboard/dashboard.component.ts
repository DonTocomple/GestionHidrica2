import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { EmpresaService } from '../empresa-detail-admin/empresa-service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  cards = [
    { id: 'barChart1', title: 'Humedad', isSelected: true },
    { id: 'barChart2', title: 'Volumen', isSelected: true },
    { id: 'lineChart1', title: 'Temperatura', isSelected: true },
    { id: 'lineChart2', title: 'Q', isSelected: true },
    { id: 'barChart3', title: 'Tiempo', isSelected: true },
    { id: 'randomValues', title: 'Últimos Valores', isSelected: true }
  ];

  randomValues: { label: string, value: number }[] = [];
  private intervalId: any;

  constructor(
    private empresaService: EmpresaService,
    private cdRef: ChangeDetectorRef
  ) {
    Chart.register(...registerables);
    this.loadSelectedCharts();
  }

  ngAfterViewInit() {
    if (this.cards[0].isSelected) this.createBarChart1();
    if (this.cards[1].isSelected) this.createBarChart2();
    if (this.cards[2].isSelected) this.createLineChart1();
    if (this.cards[3].isSelected) this.createLineChart2();
    if (this.cards[4].isSelected) this.createBarChart3();
    this.generateRandomValues();

    this.intervalId = setInterval(() => {
      this.generateRandomValues();
      this.cdRef.detectChanges(); // Detecta cambios en la vista
    }, 1000); // Actualiza cada segundo
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  loadSelectedCharts() {
    const savedData = this.empresaService.getEmpresaGraficos();
    this.cards.forEach(card => {
      const selectedChart = savedData['Agrícola los Pellines']?.find(grafico => grafico.texto === card.title);
      if (selectedChart) {
        card.isSelected = selectedChart.isSelected;
      }
    });
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
    const realTime = this.returnNumberLive(5, 1000);

    this.randomValues = [
      { label: 'Humedad', value: humidity },
      { label: 'Volumen', value: volume },
      { label: 'Temperatura', value: temperature },
      { label: 'Q', value: q },
      { label: 'Tiempo', value: time },
      { label: 'Random', value: realTime }
    ];
  }

  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  returnNumberLive(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
