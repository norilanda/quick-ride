import { Injectable } from '@angular/core';
import {
  Auth,
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: Auth) {}

  get AfAuth(): Auth {
    return this.afAuth;
  }

  public sendOtpOnPhone(phoneNumber: string, appVerifier: RecaptchaVerifier) {
    return from(signInWithPhoneNumber(this.afAuth, phoneNumber, appVerifier));
  }

  public verifyPhone(confirmationResult: ConfirmationResult, otpCode: string) {
    return from(confirmationResult.confirm(otpCode));
  }
}
