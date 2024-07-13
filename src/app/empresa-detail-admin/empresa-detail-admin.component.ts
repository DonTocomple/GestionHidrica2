import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from '../empresa-list/empresa-list.component';

@Component({
  selector: 'app-empresa-detail-admin',
  standalone: true,
  imports: [CommonModule, EmpresaListComponent],
  templateUrl: './empresa-detail-admin.component.html',
  styleUrl: './empresa-detail-admin.component.css'
})
export class EmpresaDetailAdminComponent {
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

  constructor(public router: Router) {}

  navigateToDetail(empresa: string) {
    const id = this.empresas.indexOf(empresa);
    this.router.navigate(['/empresa', id]);
  }
  
}
