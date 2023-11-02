import { Component } from '@angular/core';
import { createPassengerPersonalInfoForm } from 'src/app/core/forms-models/passenger-registration-form';
import { phoneNumberMask } from 'src/app/core/constants/masks';
import { PhoneInputComponent } from 'src/app/core/base/phone-input-base';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-passenger-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.sass'],
})
export class PassengerRegistrationFormComponent extends PhoneInputComponent {
    public registrationForm = createPassengerPersonalInfoForm();

    public phoneMask = phoneNumberMask;

    public showPassword = false;

    protected get phoneControll(): FormControl<string | null> {
        return this.registrationForm.controls.phone;
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
