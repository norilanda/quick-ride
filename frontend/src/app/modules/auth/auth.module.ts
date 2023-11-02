import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ChooseAppTypeComponent } from './components/choose-app-type/choose-app-type.component';
import { PassengerLoginComponent } from './components/passenger-login/passenger-login.component';
import { DriverLoginComponent } from './components/driver-login/driver-login.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { PassengerRegistrationFormComponent } from './components/passenger-login/registration-form/registration-form.component';
import { PhoneVerificationComponent } from './components/phone-verification/phone-verification.component';
import { DriverRegistrationFormComponent } from './components/driver-login/driver-registration-form/driver-registration-form.component';
import { DriverPersonalInfoFormComponent } from './components/driver-login/driver-personal-info-form/driver-personal-info-form.component';
import { DriverCarInfoFormComponent } from './components/driver-login/driver-car-info-form/driver-car-info-form.component';
import { CustomMaterialModule } from '../shared/material/custom-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AuthPageComponent,
        ChooseAppTypeComponent,
        PassengerLoginComponent,
        DriverLoginComponent,
        SignInFormComponent,
        PassengerRegistrationFormComponent,
        PhoneVerificationComponent,
        DriverRegistrationFormComponent,
        DriverPersonalInfoFormComponent,
        DriverCarInfoFormComponent,
    ],
    imports: [CommonModule, AuthRoutingModule, SharedModule, CustomMaterialModule],
})
export class AuthModule {}
