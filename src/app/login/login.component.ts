import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormService } from '../services/form.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent extends FormService {
  constructor(
    protected http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    super(http)
    this.route.queryParams.subscribe(params => {
      console.log(params)
    });
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  onSubmit () {
    super.submit('/login', this.form.value)
  }
}
