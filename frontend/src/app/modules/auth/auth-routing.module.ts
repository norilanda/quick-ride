import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ChooseAppTypeComponent } from './components/choose-app-type/choose-app-type.component';
import { PassengerLoginComponent } from './components/passenger-login/passenger-login.component';
import { DriverLoginComponent } from './components/driver-login/driver-login.component';
import { PhoneVerificationComponent } from './components/phone-verification/phone-verification.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-type',
        pathMatch: 'full',
      },
      {
        path: 'app-type',
        component: ChooseAppTypeComponent,
      },
      {
        path: 'passenger',
        component: PassengerLoginComponent,
      },
      {
        path: 'driver',
        component: DriverLoginComponent,
      },
      {
        path: 'verify-phone',
        component: PhoneVerificationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
