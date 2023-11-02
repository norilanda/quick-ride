import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nameWithSpacesRe, passwordRe } from 'src/app/core/constants/validation-regex';

export const createPassengerPersonalInfoForm = () =>
    new FormGroup({
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
    });
