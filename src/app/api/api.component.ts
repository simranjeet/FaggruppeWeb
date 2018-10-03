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
  apiStatus: string = 'Not connected';
  greetings: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.getGreetings();
    this.getApiStatus();
  }

  // getGreetings(): void {
  //   this.greetingSubscription = this.apiService.getGreetings().subscribe((greetings) => this.doneLoading = true,
  //     err => { 
  //       this.doneLoading = true;
  //       this.failedLoading = true;
  //       this.errorMessage = this.apiService.handleErrorMessage(err);
  //   });
  // }

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
