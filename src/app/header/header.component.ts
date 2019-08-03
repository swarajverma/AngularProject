import { Component, OnInit } from '@angular/core';
// import { UserService } from '../service/user.service';
/* import { User } from '../user'; */
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  /* public users: User; */
  //  constructor(private userService: UserService) { }
   constructor(public oauthService:OAuthService) {  
    /* this.users=new User(); */
    
  }

  get getName(){
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    console.log("Logged In - "+claims['name']);
    return claims['name'];
  }
  
}
