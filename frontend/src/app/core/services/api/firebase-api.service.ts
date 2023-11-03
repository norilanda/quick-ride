import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class FirebaseApiService {
    private baseUrl = 'https://identitytoolkit.googleapis.com/v1';

    constructor(private http: HttpClient) {}

    public attachEmailAndPasswordToUserAccount(userIdToken: string, userEmail: string, userPassword: string) {
        const payload = {
            idToken: userIdToken,
            email: userEmail,
            password: userPassword,
        };
        return this.http.post<any>(
            this.baseUrl + '/accounts:signUp' + '?key=' + environment.firebaseConfig.apiKey,
            payload,
        );
    }
}
