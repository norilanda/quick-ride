import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordRe } from 'src/app/modules/shared/constants/validation-regex';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass'],
})
export class SignInFormComponent {
  @Input() IsPassangerApp = true;

  public signInForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(passwordRe),
      ]),
    },
    {
      updateOn: 'blur',
    }
  );

  public showPassword = false;

  onSignIn() {
    console.log(this.signInForm);
  }
}
