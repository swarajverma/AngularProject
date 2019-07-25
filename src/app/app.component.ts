import { Component, OnInit, Input } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  
  constructor(public oauthService: OAuthService) {
    this.oauthService.redirectUri = "http://localhost:4200";
    this.oauthService.clientId = '0oag90o7xcnIIIgCD0h7';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = 'https://johndeere.oktapreview.com/oauth2/ausbyg0qjqui2r9WT0h7';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  ngOnInit() {
  }
  

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
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


