import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../views/dashboard/dashboard.component'
import { AboutComponent } from '../views/about/about.component'

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'about', component: AboutComponent },
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'**', redirectTo: '/dashboard', pathMatch: 'full' }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
