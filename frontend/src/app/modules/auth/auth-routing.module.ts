import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ChooseAppTypeComponent } from './components/choose-app-type/choose-app-type.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
