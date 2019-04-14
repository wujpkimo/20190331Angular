import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup } from '@angular/forms';

class RegisterViewModel {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  password2 = '';
}

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
      firstName: 'Will',
      lastName: 'Huang',
      email: 'huang@gmail.com',
      password: '123123123',
      password2: '123123123'
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);
    }
  }
}
