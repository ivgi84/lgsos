import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { LgosErrorStateMatcher } from '../../shared/formErrorStateMatcher';
import { AuthService } from '../../shared/core/auth/auth.service';


function passwordMatchValidator(g: FormGroup) {
  const passwordControl = g.get('password'),
      confirmPasswordControl = g.get('confirmPassword');

      if (passwordControl.value === confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
        return null;
      } else {
        confirmPasswordControl.setErrors({'mismatch': true});
        return {'mismatch': true};
      }
}

function validateEmail(control: FormControl) {
  const email = control.value;
  const EMAIL_REGEX =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ( !EMAIL_REGEX.test(email) ) {
    return {
      emailPattern: {
        validPattern: true
      }
    }
  } else {
    return null;
  }
}

@Component({
  selector: 'lgos-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  matcher = new LgosErrorStateMatcher();
  private registerForm: FormGroup;
  private passwordStrength = [];
  private user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor( private authService: AuthService ) { }

  get f() {
    return this.registerForm.controls;
  }
  get passwordStrengthName() {
    if (this.passwordStrength.length === 5) {
      return 'strong';
    } else if (this.passwordStrength.length === 3) {
      return 'medium';
    } else {
      return 'weak';
    }
  }

  submit() {
    this.authService.register(this.user).subscribe(response => {
      console.log(response);
    })
  }

  ngOnInit() {
      this.registerForm = new FormGroup({
        'name' : new FormControl(this.user.name, [
          Validators.required,
          Validators.minLength(5),
        ]),
        'email' : new FormControl(this.user.email, [
          Validators.required,
          validateEmail
        ]),
        'password' : new FormControl(this.user.password, [
          Validators.required,
          Validators.minLength(6),
        ]),
        'confirmPassword' : new FormControl(this.user.confirmPassword, [
          Validators.required])
      }, { validators: passwordMatchValidator, updateOn: 'change'} );


      this.registerForm.get('password').valueChanges.subscribe(this.onPasswordChange.bind(this));
  }

  private  onPasswordChange(password: string) {
    const STRONG_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    const MEDIUM_REGEX = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

    if (STRONG_REGEX.test(password)) {
      this.passwordStrength = new Array(5);
      return
    } else if (MEDIUM_REGEX.test(password)) {
      this.passwordStrength = new Array(3);
      return
    } else {
      this.passwordStrength = new Array(1);
    }
  }


}
