import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EmployeeComponent } from "./employee/employee.component";
import { DepartmentComponent } from "./department/department.component";

import { MasterDetailComponent } from './master-detail/master-detail.component';


import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [  
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  { path:'employee', component:EmployeeComponent},
  { path:'department', component:DepartmentComponent},
  { path:'master-detail',component:MasterDetailComponent},
  { path:'template-driven-form',component:TemplateDrivenFormComponent},
  { path:'reactive-form',component:ReactiveFormComponent}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


