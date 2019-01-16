import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { LgosErrorStateMatcher } from '../../shared/formErrorStateMatcher';
import { AuthService } from '../../shared/core/auth/auth.service';


function passwordMatchValidator(g: FormGroup) {
  let passwordControl = g.get('password'),
      confirmPasswordControl = g.get('confirmPassword');

      if(passwordControl.value === confirmPasswordControl.value){
        confirmPasswordControl.setErrors(null)
        return null;
      }
      else{
        confirmPasswordControl.setErrors({'mismatch': true});
        return {'mismatch': true};
      }
}

@Component({
  selector: 'lgos-register-form',
  templateUrl: './register-form.component.html',
  styleUrls:['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  matcher = new LgosErrorStateMatcher();

  private registerForm: FormGroup;
  private user = {
    name:'aaaaaa',
    email:'aaa@aaa.co',
    password:'123qwe',
    confirmPassword:'123qwe'
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
      Validators.required])
  }, { validators: passwordMatchValidator, updateOn: 'blur'} );
}

  get f(){
    return this.registerForm.controls;
  }


  sumbit(){
    debugger
      this.authService.register(this.user).subscribe(response =>{
        console.log(response);
      })
  }

}
