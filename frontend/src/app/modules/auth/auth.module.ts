import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { ChooseAppTypeComponent } from './components/choose-app-type/choose-app-type.component';
import { PassengerLoginComponent } from './components/passenger-login/passenger-login.component';
import { DriverLoginComponent } from './components/driver-login/driver-login.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { PassengerRegistrationFormComponent } from './components/passenger-login/registration-form/registration-form.component';
import { PhoneVerificationComponent } from './components/phone-verification/phone-verification.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    ChooseAppTypeComponent,
    PassengerLoginComponent,
    DriverLoginComponent,
    SignInFormComponent,
    PassengerRegistrationFormComponent,
    PhoneVerificationComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
