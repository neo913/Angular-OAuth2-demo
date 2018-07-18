import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  authConfig;

  constructor(private oauthService: OAuthService){
    // this.oauthService.redirectUri = window.location.origin;
    // this.oauthService.clientId = '0oafr8ew85P6LOLNq0h7';
    // this.oauthService.scope = 'openid profile email';
    // this.oauthService.issuer = 'https://dev-113582.oktapreview.com/oauth2/default';
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.setOAuth();
    this.oauthService.configure(this.authConfig);
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  // authConfig: AuthConfig = {
  //   redirectUri: window.location.origin,
  //   clientId: '0oafr8ew85P6LOLNq0h7',
  //   scope: 'openid profile email',
  //   issuer: 'https://dev-113582.oktapreview.com/oauth2/default',
  //   tokenValidationHandler: JwksValidationHandler;
  // }

  setOAuth() {
    this.authConfig = new AuthConfig();
    this.authConfig.redirectUri = window.location.origin;
    this.authConfig.clientId    = '0oafr8ew85P6LOLNq0h7';
    this.authConfig.scope       = 'openid profile email';
    this.authConfig.issuer      = 'https://dev-113582.oktapreview.com/oauth2/default';
    this.authConfig.tokenValidationHandler = new JwksValidationHandler();
    this.authConfig.strictDiscoveryDocumentValidation = false
  }
  

}
