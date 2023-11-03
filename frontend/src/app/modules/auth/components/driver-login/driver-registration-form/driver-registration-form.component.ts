import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhoneInputComponent } from 'src/app/core/base/phone-input-base';
import {
    createDriverCarInfoForm,
    createDriverPersonalInfoForm,
} from 'src/app/core/forms-models/driver-registration-form';
import { take } from 'rxjs';

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

    protected get emailControllValue() {
        return this.registrationForm.controls.personalInfo.controls.email.value;
    }

    protected get passwordControllValue() {
        return this.registrationForm.controls.personalInfo.controls.password.value;
    }

    constructor(private authService: AuthService) {
        super();

        this.phoneControll.valueChanges.subscribe((newValue) => {
            this.onPhoneNumberChanged(newValue);
        });
    }

    protected linkEmailToFirebase() {
        this.authService
            .linkEmailToCurrentUserFirebaseAccount(this.emailControllValue!, this.passwordControllValue!)
            .pipe(take(1))
            .subscribe(() => {
                this.authService
                    .signInWithEmailAndPassword(this.emailControllValue!, this.passwordControllValue!)
                    .pipe(take(1))
                    .subscribe();
            });
    }

    onRegister() {
        this.linkEmailToFirebase();
    }
}
