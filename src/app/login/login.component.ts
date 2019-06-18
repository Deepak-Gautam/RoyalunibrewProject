import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../passwordValidator';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  invalidLoginMessage;
  constructor(fb: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      PasswordValidator.cannotContainSpace])]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.invalidLoginMessage = params.invalidLoginMessage;
    });
  }
  login() {
    const result = this.loginService.login(this.form.controls.username.value, this.form.controls.password.value);
    if (!result) {
      this.form.controls.password.setErrors({
        invvalidLogin: true
      });
    }
  }

}

//  Hardcorded user
//  dipakgautam120@gmail.com
//  Password3885
