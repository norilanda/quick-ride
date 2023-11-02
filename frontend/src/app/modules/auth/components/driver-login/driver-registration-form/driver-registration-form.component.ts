import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhoneInputComponent } from 'src/app/core/base/phone-input-base';
import {
    createDriverCarInfoForm,
    createDriverPersonalInfoForm,
} from 'src/app/core/forms-models/driver-registration-form';

@Component({
    selector: 'app-driver-registration-form',
    templateUrl: './driver-registration-form.component.html',
    styleUrls: ['./driver-registration-form.component.sass'],
})
export class DriverRegistrationFormComponent extends PhoneInputComponent {
    public registrationForm = new FormGroup({
        personalInfo: createDriverPersonalInfoForm(),
        carInfo: createDriverCarInfoForm(),
    });

    protected get phoneControll(): FormControl<string | null> {
        return this.registrationForm.controls.personalInfo.controls.phone;
    }

    constructor() {
        super();

        this.phoneControll.valueChanges.subscribe((newValue) => {
            this.onPhoneNumberChanged(newValue);
        });
    }

    onRegister() {
        console.log(this.registrationForm);
    }
}
