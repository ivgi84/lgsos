import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class LgosErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@Component({
  selector: 'lgos-register-form',
  templateUrl: './register-form.component.html',
  styleUrls:['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  private registerForm: FormGroup;
  private user = {
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  };

  ngOnInit() { 

  this.registerForm = new FormGroup({
    'name' : new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(5),
    ]),
    'email' : new FormControl(this.user.email, [
      Validators.required,
      Validators.email,
    ]),
    'password' : new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(6),
    ]),
    'confirmPassword' : new FormControl(this.user.confirmPassword, [
      Validators.required
    ])
  });
}

  get f(){
    return this.registerForm.controls;
  }




  matcher = new LgosErrorStateMatcher();

}
