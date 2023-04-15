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

//pagination
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddComponent } from './Department/add/add.component';
import { DisplayComponent } from './Department/display/display.component';
import { EditComponent } from './Department/edit/edit.component';
import { AddfieldComponent } from './Field/addfield/addfield.component';
import { EditfieldComponent } from './Field/editfield/editfield.component';
import { DisplayfieldComponent } from './Field/displayfield/displayfield.component';

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
  {//admin only
    path : '', component : MainpageComponent, canActivate : [AuthguardGuard, OnlyadminGuard],
    children : [
      {
        path : 'dashboard', component : DashboardComponent
      },
      //department
      {
        path : 'department/create', component : AddComponent
      },
      {
        path : 'departments', component : DisplayComponent
      },
      {
        path : 'department/edit/:id', component : EditComponent
      },
      //field
      {
        path : 'field/create', component : AddfieldComponent
      },
      {
        path : 'fields', component : DisplayfieldComponent
      },
      {
        path : 'field/edit/:id', component : EditfieldComponent
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
    AddComponent,
    DisplayComponent,
    EditComponent,
    AddfieldComponent,
    EditfieldComponent,
    DisplayfieldComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule, 
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ApiConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
