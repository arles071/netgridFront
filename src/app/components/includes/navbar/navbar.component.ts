import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){

    this.authservice.logout().subscribe( (res: any) => {

      if(res.success){
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      }
    })
  }

}
