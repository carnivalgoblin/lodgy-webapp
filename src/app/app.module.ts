import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {RegisterComponent} from './components/auth-pages/register/register.component';
import {LoginComponent} from './components/auth-pages/login/login.component';
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
import { TripDetailComponent } from './components/detail-pages/trip-detail/trip-detail.component';
import { ExpenseDetailComponent } from './components/detail-pages/expense-detail/expense-detail.component';
import { AddTripModalComponent } from './components/modals/add-trip-modal/add-trip-modal.component';
import { AddExpenseModalComponent } from './components/modals/add-expense-modal/add-expense-modal.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import { UpdateExpenseModalComponent } from './components/modals/update-expense-modal/update-expense-modal.component';


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
    AddBeerFabComponent,
    TripDetailComponent,
    ExpenseDetailComponent,
    AddTripModalComponent,
    AddExpenseModalComponent,
    UpdateExpenseModalComponent
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
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
