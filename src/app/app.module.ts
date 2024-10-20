import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {RegisterComponent} from './components/auth-pages/register/register.component';
import {LoginComponent} from './components/auth-pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/shared/navigation/navigation.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProfileComponent} from './components/profile/profile.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {TripCardComponent} from './components/cards/trip-card/trip-card.component';
import {ExpenseCardComponent} from './components/cards/expense-card/expense-card.component';
import {SummaryCardComponent} from './components/cards/summary-card/summary-card.component';
import {TripsPageComponent} from './components/pages/trips-page/trips-page.component';
import {ExpensesPageComponent} from './components/pages/expenses-page/expenses-page.component';
import {HomeComponent} from './components/home/home.component';
import {FabButtonComponent} from './components/shared/fab-button/fab-button.component';
import {MatIconModule} from "@angular/material/icon";
import {AddTripFabComponent} from './components/shared/add-trip-fab/add-trip-fab.component';
import {AddExpenseFabComponent} from './components/shared/add-expense-fab/add-expense-fab.component';
import {AddBeerFabComponent} from './components/shared/add-beer-fab/add-beer-fab.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TripDetailComponent} from './components/detail-pages/trip-detail/trip-detail.component';
import {ExpenseDetailComponent} from './components/detail-pages/expense-detail/expense-detail.component';
import {AddTripModalComponent} from './components/modals/add-trip-modal/add-trip-modal.component';
import {AddExpenseModalComponent} from './components/modals/add-expense-modal/add-expense-modal.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {UpdateExpenseModalComponent} from './components/modals/update-expense-modal/update-expense-modal.component';
import {MatSelectModule} from "@angular/material/select";
import {DistributionPageComponent} from './components/pages/distribution-page/distribution-page.component';
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TwoDecimalDirective} from './directives/two-decimal.directive';
import {DateRangeDialogComponent} from './components/modals/date-range-dialog/date-range-dialog.component';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { AdminUsersPageComponent } from './components/pages/admin-page/admin-users-page.component';
import {MatCheckbox} from "@angular/material/checkbox";

registerLocaleData(localeDe);

@NgModule({ declarations: [
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
        UpdateExpenseModalComponent,
        DistributionPageComponent,
        TwoDecimalDirective,
        DateRangeDialogComponent,
        AdminUsersPageComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    NgOptimizedImage,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions, MatCheckbox], providers: [
        { provide: LOCALE_ID, useValue: 'de' },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {

}
