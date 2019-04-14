import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { passwordValidator, compareEqual } from './compareEqual';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';
    this.form = this.fb.group({
      firstName: this.fb.control('Will', [Validators.required]),
      lastName: ['Huang', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [passwordValidator]],
      password2: ['', [
        compareEqual('password')
        , passwordValidator]]
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
    }
  }
}
