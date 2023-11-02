import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    createDriverCarInfoForm,
    createDriverPersonalInfoForm,
} from 'src/app/core/forms-models/driver-registration-form';

@Component({
    selector: 'app-driver-registration-form',
    templateUrl: './driver-registration-form.component.html',
    styleUrls: ['./driver-registration-form.component.sass'],
})
export class DriverRegistrationFormComponent {
    public registrationForm = new FormGroup(
        {
            personalInfo: createDriverPersonalInfoForm(),
            carInfo: createDriverCarInfoForm(),
        },
        {
            updateOn: 'blur',
        },
    );

    onRegister() {
        console.log(this.registrationForm);
    }
}
