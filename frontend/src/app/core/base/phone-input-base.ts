import { FormControl } from '@angular/forms';

export abstract class PhoneInputComponent {
    public verifiedPhone = false;

    public showPhoneVerificationPage = false;

    private verifiedPhoneNumber: string | null = null;

    protected abstract get phoneControll(): FormControl<string | null>;

    protected get phoneControllValue() {
        return '+' + this.phoneControll.value;
    }

    public onPhoneNumberChanged(newValue: string | null) {
        if (newValue !== this.verifiedPhoneNumber) this.verifiedPhone = false;
    }

    public togglePhoneVerificationPage() {
        this.showPhoneVerificationPage = !this.showPhoneVerificationPage;
    }

    onVerifyPhone() {
        this.showPhoneVerificationPage = true;
    }

    public allowShowPhoneVerificationPage() {
        return this.phoneControll.valid;
    }

    public onPhoneVerifiedSuccessfully() {
        this.verifiedPhone = true;
        this.verifiedPhoneNumber = this.phoneControllValue;
        this.showPhoneVerificationPage = false;
    }
}
