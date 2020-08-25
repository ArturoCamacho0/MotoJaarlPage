import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  name = new FormControl('', [Validators.required]);
  lastname = new FormControl('');
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  hideRequiredControl = new FormControl(false);

  constructor(){}

  ngOnInit(): void {
  }

}
