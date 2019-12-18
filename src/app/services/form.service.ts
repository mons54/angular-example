import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class FormService implements OnInit {
  form;
  submitted = false;
  formError = false;

  constructor(
    protected http: HttpClient
  ) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.submitted = false;
      this.formError = false;
    });
  }

  get fields() {
    return this.form.controls;
  }

  hasError(field) {
    return !!(field.errors && (field.dirty || field.touched || this.submitted));
  }

  submit(
    path: string,
    data: object = {},
    response?: (res?: object) => any,
    error?: (err?: object) => any
  ) {
    if (this.submitted) {
      return;
    }
    this.submitted = true;
    if (this.form.valid) {
      this.http.post(path, data).
      subscribe(
        res => {
          if (response) {
            response(res);
          }
        }, err => {
          if (error) {
            error(err);
          }
          console.log(err)
          this.formError = err;
        }
      );
    }
  }
}
