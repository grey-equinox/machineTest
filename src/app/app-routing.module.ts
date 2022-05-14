import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path: 'admin',component:AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'flightlist', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
