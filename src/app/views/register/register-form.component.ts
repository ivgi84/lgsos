import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LgosErrorStateMatcher } from '../../shared/formErrorStateMatcher';
import { AuthService } from '../../shared/core/auth/auth.service';
import { RegUser } from 'app/shared/models/user';


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
  registerForm: FormGroup;
  isSubmitted: boolean;
  isLoading: boolean;
  events:any[];
  private passwordStrength = [];
  private user: RegUser = {
    firstName: 'ivgi11',
    lastName:'smol11',
    email: 'ivgi11@mail.com',
    password: '123qwe',
    confirmPassword: '123qwe',
    allowPromoEmails: true
  };

  constructor( private authService: AuthService, private fb:FormBuilder ) {
    this.events = [];
    this.isLoading = false;
    this.isSubmitted = false;
   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'firstName':[this.user.firstName,[Validators.required, Validators.minLength(2),]],
      'lastName':[this.user.lastName,[Validators.required, Validators.minLength(2)]],
      'email' : [this.user.email, [Validators.required, validateEmail]],
      'password' : [this.user.password, [Validators.required, Validators.minLength(6),]],
      'confirmPassword' : [this.user.confirmPassword, [Validators.required]],
      'allowPromoEmails': [this.user.allowPromoEmails]
    }, { validators: passwordMatchValidator, updateOn: 'change'})

    this.subscribeToFormChanges();
}

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
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

  submitHandler() {
    debugger;
    this.isLoading = true;
    this.isSubmitted = true;
    const formValue = this.registerForm.value;

    try{
      this.authService.register(formValue).then(result =>{
        console.log(result);
      })
    }
    catch(e){
      console.log('error', e);
    }

  }

  private subscribeToFormChanges(){
    const registerFormStatusChanges$ = this.registerForm.statusChanges;
    const registerFormValueChanges$ = this.registerForm.valueChanges
    
    registerFormStatusChanges$.subscribe(console.log);
    registerFormValueChanges$.subscribe(console.log);

    this.registerForm.get('password').valueChanges.subscribe(this.onPasswordChange.bind(this));
  }

  private onPasswordChange(password: string) {
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
