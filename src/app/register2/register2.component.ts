import { Component, OnInit } from '@angular/core';

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
  data = new RegisterViewModel();

  constructor() { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';

  }

}
