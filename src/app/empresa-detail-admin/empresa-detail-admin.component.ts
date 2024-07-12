import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-detail-admin',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './empresa-detail-admin.component.html',
  styleUrl: './empresa-detail-admin.component.css'
})
export class EmpresaDetailAdminComponent {
  empresa: string = '';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
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
