import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/shared/navigation/navigation.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {TripCardComponent} from './components/cards/trip-card/trip-card.component';
import {ExpenseCardComponent} from './components/cards/expense-card/expense-card.component';
import {NgOptimizedImage} from "@angular/common";
import {SummaryCardComponent} from './components/cards/summary-card/summary-card.component';
import { TripsPageComponent } from './components/trips-page/trips-page.component';
import { ExpensesPageComponent } from './components/expenses-page/expenses-page.component';
import { HomeComponent } from './components/home/home.component';
import { FabButtonComponent } from './components/shared/fab-button/fab-button.component';
import {MatIconModule} from "@angular/material/icon";
import { AddTripFabComponent } from './components/shared/add-trip-fab/add-trip-fab.component';
import { AddExpenseFabComponent } from './components/shared/add-expense-fab/add-expense-fab.component';
import { AddBeerFabComponent } from './components/shared/add-beer-fab/add-beer-fab.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    ProfileComponent,
    TripCardComponent,
    ExpenseCardComponent,
    SummaryCardComponent,
    TripsPageComponent,
    ExpensesPageComponent,
    HomeComponent,
    FabButtonComponent,
    AddTripFabComponent,
    AddExpenseFabComponent,
    AddBeerFabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
