import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AccountComponent } from './components/account/account.component';
import { UserEntryComponent } from './components/user-entry/user-entry.component';
import { BarberInfoComponent } from './components/barber-info/barber-info.component';
import { OfficeInfoComponent } from './components/office-info/office-info.component';
import { BarberPageComponent } from './components/barber-page/barber-page.component';
import { OfficePageComponent } from './components/office-page/office-page.component';
import { EnlistPageComponent } from './components/enlist-page/enlist-page.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import { FilterPipe } from './pipes/filter.pipe';
import { PricesComponent } from './components/prices/prices.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegFormComponent,
    AuthFormComponent,
    AccountComponent,
    UserEntryComponent,
    BarberInfoComponent,
    OfficeInfoComponent,
    BarberPageComponent,
    OfficePageComponent,
    EnlistPageComponent,
    FilterPipe,
    PricesComponent,
    ContactsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatTableModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi:true,
      useClass:InterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
