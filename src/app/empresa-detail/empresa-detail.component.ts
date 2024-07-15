import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmpresaService } from '../empresa-detail-admin/empresa-service.service';

@Component({
  selector: 'app-empresa-detail',
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterLink],
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {
  empresa: string = '';
  empresaGraficos: { [key: string]: any[] } = {};

  empresas = [
    'Agrícola los Pellines',
    'Agricola Jorge Borgeaud',
    'Agrícola Los Puntales',
    'Soc. Inv. Matristica',
    'Agrícola Tomás Echavarri',
    'Agrícola Domingo Guzmán',
    'Agrícola AgroAngol',
    'Agrícola Los Tatas',
    'Agrícola Santa Marina',
    'Agrícola David Estrada'
  ];

  constructor(private route: ActivatedRoute, private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaGraficos = this.empresaService.getEmpresaGraficos();

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const index = +id;
      if (index >= 0 && index < this.empresas.length) {
        this.empresa = this.empresas[index];
      } else {
        console.error('ID fuera de rango');
      }
    } else {
      console.error('ID es null');
    }
  }
}
