import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    // { validators: passwordsMatchValidator() }
  );

  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    // this.authService
    //   .signUp(email, password)
    //   .pipe(
    //     switchMap(({ user: { uid } }) =>
    //       this.usersService.addUser({ uid, email, displayName: name })
    //     ),
    //     this.toast.observe({
    //       success: 'Congrats! You are all signed up',
    //       loading: 'Signing up...',
    //       error: ({ message }) => `${message}`,
    //     })
    //   )
    //   .subscribe(() => {
    //     this.router.navigate(['/home']);
    //   });
  }

}
