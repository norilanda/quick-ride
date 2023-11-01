import { Component, Input } from '@angular/core';
import { createPassengerPersonalInfoForm } from 'src/app/core/forms-models/passenger-registration-form';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass'],
})
export class SignInFormComponent {
  @Input() IsPassangerApp = true;

  public signInForm = createPassengerPersonalInfoForm();

  public showPassword = false;

  onSignIn() {
    console.log(this.signInForm);
  }
}
