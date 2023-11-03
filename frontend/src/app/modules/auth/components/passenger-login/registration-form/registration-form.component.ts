import { Component } from '@angular/core';
import { createPassengerPersonalInfoForm } from 'src/app/core/forms-models/passenger-registration-form';
import { phoneNumberMask } from 'src/app/core/constants/masks';
import { PhoneInputComponent } from 'src/app/core/base/phone-input-base';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { take } from 'rxjs';

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

    protected get emailControllValue() {
        return this.registrationForm.controls.email.value;
    }

    protected get passwordControllValue() {
        return this.registrationForm.controls.password.value;
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
