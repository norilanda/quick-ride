import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberMask } from 'src/app/modules/shared/constants/masks';
import {
  nameWithSpacesRe,
  passwordRe,
} from 'src/app/modules/shared/constants/validation-regex';

@Component({
  selector: 'app-passenger-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.sass'],
})
export class PassengerRegistrationFormComponent {
  public registrationForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(nameWithSpacesRe),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(passwordRe),
      ]),
    },
    {
      updateOn: 'blur',
    }
  );

  public phoneMask = phoneNumberMask;

  public showPassword = false;

  onRegister() {
    console.log(this.registrationForm);
  }
}
