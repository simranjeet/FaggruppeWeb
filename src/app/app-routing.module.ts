import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdalGuard } from 'adal-angular4';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AdalGuard]
  },
  {
    path: 'api',
    component: ApiComponent,
    canActivate: [AdalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
  providers: [AdalGuard]
})
export class AppRoutingModule {}

