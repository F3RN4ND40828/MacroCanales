import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flujo-out',
  templateUrl: './flujo-out.component.html',
  styleUrls: ['./flujo-out.component.css']
})
export class FlujoOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Este código es generalmente innecesario en Angular, ya que el manejo del DOM debe hacerse con Angular.
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

  logout(): void {
    this.router.navigate(['/login']);
  }
}

