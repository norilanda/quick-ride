import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordRe } from 'src/app/core/constants/validation-regex';

export const createPassengerPersonalInfoForm = () =>
    new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(30),
                Validators.pattern(passwordRe),
            ]),
        },
        {
            updateOn: 'blur',
        },
    );
