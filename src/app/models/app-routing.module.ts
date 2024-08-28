import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { FlujoInComponent } from '../components/flujo-in/flujo-in.component';
import { FlujoOutComponent } from '../components/flujo-out/flujo-out.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flujo-in', component: FlujoInComponent },
  { path: 'flujo-out', component: FlujoOutComponent },
  { path: '**', redirectTo: '/login' } // Ruta por defecto en caso de que no se encuentre la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
