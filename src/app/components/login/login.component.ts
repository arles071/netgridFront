import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  infoError: string = '';

  constructor(private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.authService.sendLogin(this.formulario.value)
    .subscribe( (resp: any) => {
      if(resp.success){
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.data));
        this.router.navigate(['home']);
      } else {
        this.infoError = resp.message;
      }
    })
  }

}
