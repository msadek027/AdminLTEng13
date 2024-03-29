import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



import { EmployeeComponent } from "./employee/employee.component";
import { DepartmentComponent } from "./department/department.component";

import { MasterDetailComponent } from './master-detail/master-detail.component';


import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriven2FormComponent } from './template-driven2-form/template-driven2-form.component';
import { DisableButtonExampleFormComponent } from './disable-button-example-form/disable-button-example-form.component';


import { SecurityRoutingModule } from './security/security-routing.module';

//import { LoginComponent } from './login/login.component';

const routes: Routes = [  
   
  //{ path: 'sign-in',loadChildren: () => import('../master/master.module') loadChildren:() => SecurityRoutingModule},
  { path: 'security',loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule) },

 // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'employee', component:EmployeeComponent},
  { path:'department', component:DepartmentComponent},
  { path:'master-detail',component:MasterDetailComponent},
  { path:'template-driven-form',component:TemplateDrivenFormComponent},
  { path:'reactive-form',component:ReactiveFormComponent},
  { path:'template-driven2-form',component:TemplateDriven2FormComponent},
  { path:'disable-button-example-form',component:DisableButtonExampleFormComponent},
  
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


