import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-in',
  templateUrl: './flujo-in.component.html',
  styleUrls: ['./flujo-in.component.css']
})
export class FlujoInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // En Angular, los eventos del DOM deberían manejarse con Angular en lugar de directamente
    // La inicialización de eventos como este generalmente no es necesaria si usas directivas de Angular
  }

  openMenu(): void {
    const menu = document.getElementById('menuContainer');
    if (menu) {
      menu.style.display = 'flex';
    }
  }

  closeMenu(): void {
    const menu = document.getElementById('menuContainer');
    if (menu) {
      menu.style.display = 'none';
    }
  }
}

