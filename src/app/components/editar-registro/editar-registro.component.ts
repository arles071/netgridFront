import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {

  user: any;
  infoError: string = '';

  formularioeditarregistro!: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

    this.formularioeditarregistro = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      password: new FormControl(null, Validators.required),
      c_password: new FormControl(null, Validators.required),
      address: new FormControl(this.user.address, Validators.required),
      birthdate: new FormControl(this.user.birthdate, Validators.required),
      city: new FormControl(this.user.city, Validators.required)
    }, {})
  }

  editarregistro(){
    this.formularioeditarregistro.value.id = this.user.id;
    console.log(this.formularioeditarregistro.value);
    this.authService.post('user/update', this.formularioeditarregistro.value).subscribe( (res: any) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      this.infoError = res.message;
    })
  }

}
