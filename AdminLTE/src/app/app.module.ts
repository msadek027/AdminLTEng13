import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';



import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { MasterDetailComponent } from './master-detail/master-detail.component';

import { AgGridModule } from 'ag-grid-angular';



import { NgxSpinnerModule } from "ngx-spinner"; 

import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriven2FormComponent } from './template-driven2-form/template-driven2-form.component';
import { DisableButtonExampleFormComponent } from './disable-button-example-form/disable-button-example-form.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [

    
    AppComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    //HomeComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    MasterDetailComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TemplateDriven2FormComponent,
    DisableButtonExampleFormComponent,
    LoginComponent,
 
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
    NgxSpinnerModule,  
    AgGridModule.withComponents([])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SharedService],

  bootstrap: [AppComponent]
})
export class AppModule { }
