import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../service/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeAvatarGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.accountService.getToken();
    let accountToken = this.accountService.getAccountToken();
    for (const role of accountToken.roles) {
      if (token != "" && role.name == "ROLE_USER"){
        return true;
      }
    }
    this.router.navigate([""]);
    return false;
  }
}
