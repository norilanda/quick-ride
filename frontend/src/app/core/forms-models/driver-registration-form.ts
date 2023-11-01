import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  nameWithOutSpacesRe,
  numberPlateRe,
  passwordRe,
} from 'src/app/core/constants/validation-regex';

export const createDriverPersonalInfoForm = () =>
  new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern(nameWithOutSpacesRe),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern(nameWithOutSpacesRe),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern(passwordRe),
    ]),
  });

export const createDriverCarInfoForm = () =>
  new FormGroup({
    brand: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    model: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    color: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    numberPlate: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern(numberPlateRe),
    ]),
  });
