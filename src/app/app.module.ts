import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//config
import { ApiConfig } from './Config/api-config';

//guards
import { AuthguardGuard } from './guards/AuthGuard/authguard.guard';
import { EmailtokenGuard } from './guards/AuthGuard/emailtoken.guard';
import { OnlyguestGuard } from './guards/GuestGuard/onlyguest.guard';
import { OnlyadminGuard } from './guards/OnlyAdmin/onlyadmin.guard';
import { OnlyteacherGuard } from './guards/OnlyTeacher/onlyteacher.guard';

//services
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const appRoutes : Routes = [
  {
    path : 'login', component : LoginComponent, canActivate : [OnlyguestGuard]
  },
  {
    path : 'forgot', component : ForgotComponent, canActivate : [OnlyguestGuard]
  },
  {
    path : 'recover/:email/:token', component : NewpasswordComponent, canActivate : [OnlyguestGuard, EmailtokenGuard]
  },
  {
    path : '', component : MainpageComponent, canActivate : [AuthguardGuard, OnlyadminGuard],
    children : [
      {
        path : 'dashboard', component : DashboardComponent
      }
    ]
  },
  {
    path : 'forbidden', component : ForbiddenComponent
  },
  {
    path : '**', pathMatch : "full" , component : PageNotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    MainpageComponent,
    ForgotComponent,
    NewpasswordComponent,
    PageNotFoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule, 
    FormsModule
  ],
  providers: [ApiConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
