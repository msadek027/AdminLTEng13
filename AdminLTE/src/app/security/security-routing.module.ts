import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
// Import canActivate guards
import { AuthGuard } from './shared/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';

const routes: Routes = [
  //{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '',component: SignInComponent },
  { path: 'sign-in',component: SignInComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
