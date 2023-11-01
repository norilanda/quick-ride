import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberMask } from 'src/app/modules/shared/constants/masks';

@Component({
  selector: 'app-driver-personal-info-form',
  templateUrl: './driver-personal-info-form.component.html',
  styleUrls: ['./driver-personal-info-form.component.sass'],
})
export class DriverPersonalInfoFormComponent {
  @Input() personalInfoForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public phoneMask = phoneNumberMask;

  public showPassword = false;
}
