import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.sass'],
})
export class PhoneVerificationComponent {
  public phoneVerificationForm = new FormGroup(
    {
      code: new FormControl('', [Validators.required]),
    },
    {
      updateOn: 'blur',
    }
  );

  public onVerify() {}
}
