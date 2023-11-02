import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-choose-app-type',
    templateUrl: './choose-app-type.component.html',
    styleUrls: ['./choose-app-type.component.sass'],
})
export class ChooseAppTypeComponent {
    constructor(private router: Router) {}

    goToPassengerLoginPage() {
        this.router.navigate(['auth/passenger']);
    }

    goToDriverLoginPage() {
        this.router.navigate(['auth/driver']);
    }
}
