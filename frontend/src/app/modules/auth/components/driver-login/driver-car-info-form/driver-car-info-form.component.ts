import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-car-info-form',
  templateUrl: './driver-car-info-form.component.html',
  styleUrls: ['./driver-car-info-form.component.sass'],
})
export class DriverCarInfoFormComponent {
  @Input() carInfoForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.minLength(2)]),
    model: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    numberPlate: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}
