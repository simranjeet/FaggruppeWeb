import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AdalService } from 'adal-angular4';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(private http: HttpClient, private adalService: AdalService) {}

  public getGreetings(): Observable<any> {
    const options = this.getHeaders();
    return this.http.get(environment.api.apiUrl, {headers: options}).pipe(timeout(20000));
  }


  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers
    .set('Mime-Type', 'multipart/form-data')
    .set('Accept', 'application/json, text/plain')
    .set('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT')
    .set('Authorization', 'Bearer ' +  localStorage.getItem('api_token'))
    .set('Cache-Control', 'no-cache')
    .set('Pragma', 'no-cache');

    return headers;
  }

  public handleErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 500) {
      return '500 Server error';
    }
    else if (error.status === 404) {
      return '404 Resource not found';
    }
    else if (error.status === 403) {
      return '403 Not authenticated';
    }
    else if (error.status === 401) {
      this.adalService.login();
      return  '401 Not authorized';
    }
    else {
      return 'Requesting data timed out';
    }
  }

}