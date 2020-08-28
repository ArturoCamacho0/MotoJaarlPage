import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  userInput: string;
  passwordInput: string;

  constructor(
      private usersService: UsersService,
      private router: Router)
  {}

  ngOnInit(): void {
  }

  login(): any{
    if (this.user.valid && this.password.valid){
      this.usersService.loginUser(this.userInput + '@motojaarl.com', this.passwordInput)
      .then(() => {
        console.log(this.userInput, this.passwordInput);
        this.router.navigate(['/home']);
      }).catch(() => {
        alert('Usuario o contraseña incorrecta');
      });
    }
  }
}
