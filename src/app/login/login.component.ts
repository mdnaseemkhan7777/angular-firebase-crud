import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  
  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }
    // this.authService
    // .login(email, password)
    // .pipe(
    //   this.toast.observe({
    //     success: 'Logged in successfully',
    //     loading: 'Logging in...',
    //     error: ({ message }) => `There was an error: ${message} `,
    //   })
    // )
    // .subscribe(() => {
    //   this.router.navigate(['/home']);
    // });
  }










}