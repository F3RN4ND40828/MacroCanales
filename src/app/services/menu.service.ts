// src/app/services/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'mongodb+srv://fm188099:<1V1AXQT91azaRjgW>@cluster0.86mq0.mongodb.net/'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para obtener opciones del menú
  getMenuOptions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para agregar una opción al menú (ejemplo)
  addMenuOption(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, option);
  }
}

