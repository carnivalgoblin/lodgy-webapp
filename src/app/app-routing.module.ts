import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TripsPageComponent} from "./components/trips-page/trips-page.component";
import {ExpensesPageComponent} from "./components/expenses-page/expenses-page.component";

const routes: Routes = [
  { path: '', component: LandingComponent, data: { hideNavigation: true } },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'trips', component: TripsPageComponent},
  { path: 'expenses', component: ExpensesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
