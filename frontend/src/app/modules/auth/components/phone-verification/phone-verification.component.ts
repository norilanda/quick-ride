import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationResult, RecaptchaVerifier } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-phone-verification',
    templateUrl: './phone-verification.component.html',
    styleUrls: ['./phone-verification.component.sass'],
})
export class PhoneVerificationComponent implements AfterViewInit {
    @Input() phoneNumber = '+1 650-555-3433';

    @Input() navigateUrlAfterVerification = '/auth/verify-phone';

    @Input() navigateBackUrl = '/auth';

    confirmationResult$: Observable<ConfirmationResult> | null = null;

    confirmationResult: ConfirmationResult | null = null;

    public verificationNumberSent = false;

    public phoneVerificationForm = new FormGroup({
        code: new FormControl('', [Validators.required]),
    });

    private recaptchaVerifier: RecaptchaVerifier | null = null;

    public recaptchaChecked = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngAfterViewInit(): void {
        this.recaptchaVerifier = this.createRecaptchaVerifier();
        this.recaptchaVerifier.render();
    }

    private createRecaptchaVerifier() {
        return new RecaptchaVerifier(this.authService.AfAuth, 'recaptcha-container', {
            size: 'compact',
            callback: () => (this.recaptchaChecked = true),
        });
    }

    public sendVerificationCode() {
        this.confirmationResult$ = this.authService.sendOtpOnPhone(this.phoneNumber, this.recaptchaVerifier!);

        this.confirmationResult$.pipe(take(1)).subscribe({
            next: (confirmation) => {
                this.verificationNumberSent = true;
                this.confirmationResult = confirmation;
            },
            error: (error) => console.log(error),
        });
    }

    public onVerify() {
        this.authService
            .verifyPhone(this.confirmationResult!, this.phoneVerificationForm.value.code!)
            .pipe(take(1))
            .subscribe({
                next: (credentials) => {
                    console.log(credentials);
                    this.router.navigate([this.navigateUrlAfterVerification]);
                },
                error: (error) => {
                    console.log(error);
                },
            });
    }
}
