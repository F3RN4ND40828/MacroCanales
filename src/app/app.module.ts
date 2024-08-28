// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

// Importa HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// Asegúrate de tener los componentes creados e importados
import { FlujoInComponent } from './components/flujo-in/flujo-in.component';
import { FlujoOutComponent } from './components/flujo-out/flujo-out.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },  
  { path: 'flujo-in', component: FlujoInComponent },  
  { path: 'flujo-out', component: FlujoOutComponent },  
  { path: 'login', component: LoginComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({  
  declarations: [  
    HeaderComponent,  
    MenuComponent,  
    HomeComponent,  
    FlujoInComponent,  
    FlujoOutComponent,  
    LoginComponent  
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    RouterModule.forRoot(routes)  
  ],  
  providers: [],  
  bootstrap: []
})

