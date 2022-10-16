import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import { environment } from '../environments/environment';
// Auth service
//import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/auth.service';
// Import canActivate guards
import { AuthGuard } from './shared/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
@NgModule({
  declarations: [UserProfileComponent, SignInComponent],
  imports: [
     CommonModule,
    SecurityRoutingModule,
    //BrowserModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    //AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, SecureInnerPagesGuard],
})
export class SecurityModule { }
