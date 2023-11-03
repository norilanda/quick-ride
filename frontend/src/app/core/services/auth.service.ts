import { FirebaseApiService } from './api/firebase-api.service';
import { Injectable } from '@angular/core';
import {
    Auth,
    ConfirmationResult,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private afAuth: Auth,
        private firebaseApiService: FirebaseApiService,
    ) {}

    get AfAuth(): Auth {
        return this.afAuth;
    }

    public sendOtpOnPhone(phoneNumber: string, appVerifier: RecaptchaVerifier) {
        return from(signInWithPhoneNumber(this.afAuth, phoneNumber, appVerifier));
    }

    public verifyPhone(confirmationResult: ConfirmationResult, otpCode: string) {
        return from(confirmationResult.confirm(otpCode));
    }

    public linkEmailToCurrentUserFirebaseAccount(email: string, password: string) {
        return from(this.afAuth.currentUser!.getIdToken()).pipe(
            switchMap((idToken) => {
                return this.firebaseApiService.attachEmailAndPasswordToUserAccount(idToken, email, password);
            }),
        );
    }

    public signInWithEmailAndPassword(email: string, password: string) {
        return from(signInWithEmailAndPassword(this.AfAuth, email, password));
    }
}
