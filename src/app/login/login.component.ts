import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent {
  form;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  get fields () {
    return this.form.controls;
  }

  onSubmit () {
    if (this.form.valid) {
      console.log(this.form.valid)
      this.http.post('/login', this.form.value).
      subscribe(response => {
        console.log(response)
      })
    }
  }
}
