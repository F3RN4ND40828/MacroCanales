import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  closeMenu() {
    // Lógica para cerrar el menú
    document.getElementById("menuContainer")!.style.display = "none";
  }
}

