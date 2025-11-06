import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../../core/model/classes/user.model';
import { UserService } from '../../core/service/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: UserLogin = new UserLogin();
  userService = inject(UserService);
  router = inject(Router);
  onLogin() {
    debugger;
    this.userService.onLogin(this.loginObj).subscribe({
      next: (response: any) => {
        debugger;
        const data = response.data.data;
        const strData = JSON.stringify(data);
        localStorage.setItem('LoginUser', strData);
        this.router.navigateByUrl('/master');
      },
      error: (error: any) => {
        debugger;
      },
    });
  }
}
