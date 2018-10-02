import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AdalService, AdalGuard} from 'adal-angular4';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
