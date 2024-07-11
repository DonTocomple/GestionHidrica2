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

  notificationsEnabled = true;

  notificaciones = [
    { id: 1, texto: 'notificacion 1' },
    { id: 2, texto: 'notificacion 2' },
    { id: 3, texto: 'notificacion 3' },
    { id: 4, texto: 'notificacion 4' }

  ];

  deleteNotification(notificationId: number) {
    const index = this.notificaciones.findIndex(notif => notif.id === notificationId);
    if (index !== -1) {
      this.notificaciones.splice(index, 1);
    }
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }

  isOpen = false;
  isOpenConf = false;

  openNot() {
    this.isOpen = true;
    this.isOpenConf = false;
  }

  closeModal() {
    this.isOpen = false;
  }

  openConf() {
    this.isOpenConf = true;
    this.isOpen = false;
  }
  closeModalConf() {
    this.isOpenConf = false;
  }
}
