import { Component, Input } from '@angular/core';
import { createDriverCarInfoForm } from 'src/app/core/forms-models/driver-registration-form';

@Component({
    selector: 'app-driver-car-info-form',
    templateUrl: './driver-car-info-form.component.html',
    styleUrls: ['./driver-car-info-form.component.sass'],
})
export class DriverCarInfoFormComponent {
    @Input() carInfoForm = createDriverCarInfoForm();
}
