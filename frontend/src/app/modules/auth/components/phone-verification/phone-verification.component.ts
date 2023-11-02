import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationResult, RecaptchaVerifier } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, take } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
    selector: 'app-phone-verification',
    templateUrl: './phone-verification.component.html',
    styleUrls: ['./phone-verification.component.sass'],
})
export class PhoneVerificationComponent implements AfterViewInit {
    @Input() phoneNumber = '';

    @Output() phoneVerifiedSuccessfully = new EventEmitter<void>();

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
        private notificationService: NotificationService,
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
            error: (error) => this.notificationService.showErrorMessage(error),
        });
    }

    public onVerify() {
        this.authService
            .verifyPhone(this.confirmationResult!, this.phoneVerificationForm.value.code!)
            .pipe(take(1))
            .subscribe({
                next: (credentials) => {
                    console.log(credentials);
                    this.phoneVerifiedSuccessfully.emit();
                },
                error: (error) => {
                    this.notificationService.showErrorMessage(error);
                },
            });
    }
}
