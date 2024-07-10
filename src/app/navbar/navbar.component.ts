import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isOpen = false;

  openNot() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
