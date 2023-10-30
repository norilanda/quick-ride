import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { ChooseAppTypeComponent } from './components/choose-app-type/choose-app-type.component';

@NgModule({
  declarations: [AuthPageComponent, ChooseAppTypeComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
