import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    public constructor(private snackBar: MatSnackBar) {}

    public showErrorMessage(error: string, action = '') {
        this.snackBar.open(error, action, { duration: 2500, panelClass: 'error-snack-bar' });
    }

    public showInfoMessage(message: string, action = '') {
        this.snackBar.open(message, action, { duration: 2500, panelClass: 'info-snack-bar' });
    }

    public showSuccessMessage(message: string, action = '') {
        this.snackBar.open(message, action, { duration: 2500, panelClass: 'success-snack-bar' });
    }
}
