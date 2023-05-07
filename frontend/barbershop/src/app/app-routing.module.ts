import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegFormComponent} from "./components/reg-form/reg-form.component";
import {AuthFormComponent} from "./components/auth-form/auth-form.component";
import {AccountComponent} from "./components/account/account.component";
import {BarberPageComponent} from "./components/barber-page/barber-page.component";
import {OfficePageComponent} from "./components/office-page/office-page.component";
import {EnlistPageComponent} from "./components/enlist-page/enlist-page.component";
import {AuthGuardsService} from "./services/auth.guards.service";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'registration', component:RegFormComponent},
  {path:'auth', component:AuthFormComponent},
  {path:'account',component:AccountComponent,canActivate:[AuthGuardsService]},
  {path:'barbers',component:BarberPageComponent},
  {path:'offices',component:OfficePageComponent},
  {path:'enlist',component:EnlistPageComponent,canActivate:[AuthGuardsService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
