import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-registration-form',
  templateUrl: './driver-registration-form.component.html',
  styleUrls: ['./driver-registration-form.component.sass'],
})
export class DriverRegistrationFormComponent {
  public registrationForm = new FormGroup(
    {
      personalInfo: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          // Validators.minLength(3),
          // Validators.maxLength(1),
        ]),
        phone: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      }),
      carInfo: new FormGroup({
        brand: new FormControl('', [Validators.required]),
        model: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
        numberPlate: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      }),
    },
    {
      updateOn: 'blur',
    }
  );

  onRegister() {
    console.log(this.registrationForm);
  }
}
