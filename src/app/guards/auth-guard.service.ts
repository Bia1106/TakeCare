import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../providers/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) { }
  canActivate(): Observable<boolean> | boolean {

    if (this.auth.IsLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
