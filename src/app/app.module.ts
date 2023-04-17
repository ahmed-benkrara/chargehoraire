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
import { AddmoduleComponent } from './Module/addmodule/addmodule.component';
import { DisplaymoduleComponent } from './Module/displaymodule/displaymodule.component';
import { EditmoduleComponent } from './Module/editmodule/editmodule.component';

import { AddsemesterComponent } from './Semester/addsemester/addsemester.component';
import { DisplaysemesterComponent } from './Semester/displaysemester/displaysemester.component';
import { EditsemesterComponent } from './Semester/editsemester/editsemester.component';

import { AddsessionComponent } from './Session/addsession/addsession.component';
import { DisplaysessionComponent } from './Session/displaysession/displaysession.component';
import { UpdatesessionComponent } from './Session/updatesession/updatesession.component';

import { AddyearComponent } from './Year/addyear/addyear.component';
import { DisplayyearComponent } from './Year/displayyear/displayyear.component';
import { EdityearComponent } from './Year/edityear/edityear.component';

import { AddtypehComponent } from './TypeH/addtypeh/addtypeh.component';
import { EdittypehComponent } from './TypeH/edittypeh/edittypeh.component';
import { DisplaytypehComponent } from './TypeH/displaytypeh/displaytypeh.component';

import { AddprofessorComponent } from './Professor/addprofessor/addprofessor.component';
import { EditprofessorComponent } from './Professor/editprofessor/editprofessor.component';
import { DisplayprofessorComponent } from './Professor/displayprofessor/displayprofessor.component';

import { AddAdministatifComponent } from './AdminTask/add-administatif/add-administatif.component';
import { EditAdministatifComponent } from './AdminTask/edit-administatif/edit-administatif.component';
import { DisplayAdministatifComponent } from './AdminTask/display-administatif/display-administatif.component';

import { AddteachesComponent } from './Teaches/addteaches/addteaches.component';
import { DisplayteachesComponent } from './Teaches/displayteaches/displayteaches.component';
import { EditteachesComponent } from './Teaches/editteaches/editteaches.component';

import { TeachernavComponent } from './teachernav/teachernav.component';

import { TeachermainComponent } from './teachermain/teachermain.component';

import { DisplayMTasksComponent } from './Prof/display-mtasks/display-mtasks.component';

const appRoutes : Routes = [
  {
    path : '', component : LoginComponent, canActivate : [OnlyguestGuard]
  },
  {
    path : 'login', component : LoginComponent, canActivate : [OnlyguestGuard]
  },
  {
    path : 'forgot', component : ForgotComponent, canActivate : [OnlyguestGuard]
  },
  {
    path : 'recover/:email/:token', component : NewpasswordComponent, canActivate : [OnlyguestGuard, EmailtokenGuard]
  },
  {//user only
    path : 'professor' ,component : TeachermainComponent, canActivate : [AuthguardGuard, OnlyteacherGuard],

    children : [
      {
        path : 'tasktime', component : DisplayMTasksComponent
      },
      {//Don't forget this
        path: '**', redirectTo: '/professor/tasktime'
      }
    ]
  },
  {//admin only
    path : 'admin' ,component : MainpageComponent, canActivate : [AuthguardGuard, OnlyadminGuard],
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
      },
      //module
      {
        path : 'module/create', component : AddmoduleComponent
      },
      {
        path : 'modules', component : DisplaymoduleComponent
      },
      {
        path : 'module/edit/:id', component : EditmoduleComponent
      },
      //semester
      {
        path : 'semester/create', component : AddsemesterComponent
      },
      {
        path : 'semesters', component : DisplaysemesterComponent
      },
      {
        path : 'semester/edit/:id', component : EditsemesterComponent
      },
      //session
      {
        path : 'session/create', component : AddsessionComponent
      },
      {
        path : 'sessions', component : DisplaysessionComponent
      },
      {
        path : 'session/edit/:id', component : UpdatesessionComponent
      },
      //year
      {
        path : 'year/create', component : AddyearComponent
      },
      {
        path : 'years', component : DisplayyearComponent
      },
      {
        path : 'year/edit/:id', component : EdityearComponent
      },
      //typeh
      {
        path : 'typeh/create', component : AddtypehComponent
      },
      {
        path : 'typehs', component : DisplaytypehComponent
      },
      {
        path : 'typeh/edit/:id', component : EdittypehComponent
      },
      //professors
      {
        path : 'professor/create', component : AddprofessorComponent
      },
      {
        path : 'professors', component : DisplayprofessorComponent
      },
      {
        path : 'professor/edit/:id', component : EditprofessorComponent
      },
      //Administratif task
      {
        path : 'administratif/create', component : AddAdministatifComponent
      },
      {
        path : 'administratifs', component : DisplayAdministatifComponent
      },
      {
        path : 'administratif/edit/:id/:year/:department', component : EditAdministatifComponent
      },
      //Administratif task
      {
        path : 'teaches/create', component : AddteachesComponent
      },
      {
        path : 'teaches', component : DisplayteachesComponent
      },
      {
        path : 'teaches/edit/:id/:year/:module', component : EditteachesComponent
      },
      {
        path: '**', redirectTo: 'dashboard'
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
    AddmoduleComponent,
    DisplaymoduleComponent,
    EditmoduleComponent,
    AddsemesterComponent,
    DisplaysemesterComponent,
    EditsemesterComponent,
    AddsessionComponent,
    DisplaysessionComponent,
    UpdatesessionComponent,
    AddyearComponent,
    DisplayyearComponent,
    EdityearComponent,
    AddtypehComponent,
    EdittypehComponent,
    DisplaytypehComponent,
    AddprofessorComponent,
    EditprofessorComponent,
    DisplayprofessorComponent,
    AddAdministatifComponent,
    EditAdministatifComponent,
    DisplayAdministatifComponent,
    AddteachesComponent,
    DisplayteachesComponent,
    EditteachesComponent,
    TeachernavComponent,
    TeachermainComponent,
    DisplayMTasksComponent,
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
