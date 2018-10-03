import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  gettingApiStatus: boolean = false;
  gettingApiData: boolean = true;
  apiStatus: string = 'Not connected';
  greetings: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getGreetings();
    this.getApiStatus();
  }

  getGreetings() {
    this.gettingApiData = true;
    return this.apiService
    .getGreetings()
    .subscribe(greetings => {
      this.greetings = greetings;
      this.gettingApiData = false;
      console.log(this.greetings);
    },
    err => {
      this.apiService.handleErrorMessage(err);
    });
  }

  getApiStatus() {
    this.gettingApiStatus = true;
    return this.apiService
      .getApiStatus()
      .subscribe(apiStatus => {
        this.apiStatus = apiStatus;
        this.gettingApiStatus = false;
        console.log(this.apiStatus);
      },
      err => {
        this.apiService.handleErrorMessage(err);
      });
  }
  
}
