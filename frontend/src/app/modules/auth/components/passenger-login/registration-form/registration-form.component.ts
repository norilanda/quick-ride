import { Component } from '@angular/core';
import { createPassengerPersonalInfoForm } from 'src/app/core/forms-models/passenger-registration-form';
import { phoneNumberMask } from 'src/app/core/constants/masks';

@Component({
    selector: 'app-passenger-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.sass'],
})
export class PassengerRegistrationFormComponent {
    public registrationForm = createPassengerPersonalInfoForm();
    public phoneMask = phoneNumberMask;

    public showPassword = false;

    onRegister() {
        console.log(this.registrationForm);
    }
}
