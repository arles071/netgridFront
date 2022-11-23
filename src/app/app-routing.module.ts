import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarRegistroComponent } from './components/editar-registro/editar-registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AutenticationGuard } from './guards/autentication.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegistroComponent},
  {path: 'editar-registro', component: EditarRegistroComponent, canActivate: [AutenticationGuard] },
  {path: 'home', component: HomeComponent, canActivate: [AutenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
