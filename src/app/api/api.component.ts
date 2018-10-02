import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  public greetingSubscription: Subscription;
  public doneLoading: boolean = false;
  public failedLoading: boolean = false;
  public errorMessage: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getGreetings();
  }

  private getGreetings(): void {
    this.greetingSubscription = this.apiService.getGreetings().subscribe((greetings) => this.doneLoading = true,
      err => { 
        this.doneLoading = true;
        this.failedLoading = true;
        this.errorMessage = this.apiService.handleErrorMessage(err);
    });
  }
  
}
