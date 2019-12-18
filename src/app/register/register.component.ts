import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FormService } from '../services/form.service';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent extends FormService {
  constructor(
    protected http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    super(http);
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  onSubmit() {
    super.submit('/register', this.form.value, () => {

    });
  }
}
