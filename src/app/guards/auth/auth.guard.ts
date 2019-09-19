import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/providers/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private zone:NgZone, private api:ApiService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

const  currentUser = this.api.currentUser;

if(currentUser){
  if(next.data.roles && next.data.roles.indexOf(currentUser.role) === -1){
   this.zone.run(()=> this.router.navigate(['/login']) )
  }else{
    return true
  }
}


return 


  }
  
}
