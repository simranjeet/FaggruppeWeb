import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogedIn: boolean = false;

  constructor(private adalService: AdalService) {
    this.adalService.init(environment.config);  
  }

  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.adalService.handleWindowCallback(); 

    // Check if the user is authenticated. If not, call the login() method
    if (!this.adalService.userInfo.authenticated) {
      this.adalService.login();
    }

    if (this.adalService.userInfo.authenticated) {
      // this.adalService.acquireToken(environment.api.clientId).subscribe( token => {localStorage.setItem("api_token", token), this.isLogedIn=true});
      this.isLogedIn = true;
    }
  }

  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

}