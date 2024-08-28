import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  openMenu() {
    const menu = document.getElementById("menuContainer");
    if (menu) {
      menu.style.display = menu.style.display === "block"? "none" : "block";
    }
  }
}
 
