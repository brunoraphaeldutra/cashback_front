import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  private isAuthenticated = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('rota: ', route );
    if (route.routeConfig.component === PrincipalComponent) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
