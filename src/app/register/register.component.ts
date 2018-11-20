import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
  	private formBuilder: FormBuilder,
  	private UsersService: UsersService,
  	private route: ActivatedRoute,
    private router: Router,
  	) { }

  ngOnInit() {
  	this.registerForm = this.formBuilder.group({
		name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users';
  }

	get f() { return this.registerForm.controls; }

  register() {
  	this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;

  	this.UsersService.register(this.registerForm.value)
  	.pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/']);
    	},
    	error => {
        //this.alertService.error(error);
        this.loading = false;
    	}
  	);
  }
}
