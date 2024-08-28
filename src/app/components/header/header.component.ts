import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openMenu() {
    // Lógica para abrir el menú
    document.getElementById('menuContainer')!.style.display = 'block';
  }
}

