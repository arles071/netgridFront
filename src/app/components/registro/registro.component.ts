import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioregistro!: FormGroup;
  infoError: string = '';
  

  constructor(private authService: AuthService,
    private router: Router) {}

 

  ngOnInit(): void {
    
    this.formularioregistro = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      c_password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    }, {})
  }

 

 

  registrarme(){
    console.log(this.formularioregistro.value);
    this.authService.post('register', this.formularioregistro.value).subscribe( (res: any) => {

      if(res.success){
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.data));
        this.router.navigate(['home']);
      } else {
        this.infoError = res.message;
      }
      
    })
    
  }


}




