import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormService } from '../services/form.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent extends FormService {
  constructor(
    protected http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    super(http);
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    super.submit('/login', this.form.value, () => {
      this.router.navigate(['me']);
    });
  }
}
