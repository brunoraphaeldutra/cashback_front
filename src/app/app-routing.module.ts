import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { PageResellerComponent } from './page-reseller/page-reseller.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'dashboard',
        component: PageDashboardComponent
      },
      {
        path: 'revendedores',
        component: PageResellerComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
