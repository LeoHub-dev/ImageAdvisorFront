import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
  	private formBuilder: FormBuilder,
  	private LoginService: LoginService,
  	private route: ActivatedRoute,
    private router: Router,
  	) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.LoginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

  	this.LoginService.login(this.f.email.value, this.f.password.value)
  	.pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
    	},
    	error => {
        //this.alertService.error(error);
        this.loading = false;
    	}
  	);
  }


}
