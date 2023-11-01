import { Component, Input } from '@angular/core';
import { createDriverPersonalInfoForm } from 'src/app/core/forms-models/driver-registration-form';
import { phoneNumberMask } from 'src/app/core/constants/masks';

@Component({
  selector: 'app-driver-personal-info-form',
  templateUrl: './driver-personal-info-form.component.html',
  styleUrls: ['./driver-personal-info-form.component.sass'],
})
export class DriverPersonalInfoFormComponent {
  @Input() personalInfoForm = createDriverPersonalInfoForm();

  public phoneMask = phoneNumberMask;

  public showPassword = false;
}
