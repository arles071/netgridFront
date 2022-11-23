import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logeado: boolean = false;
  title = 'netgrid_front';


  ngOnInit(){

    if(localStorage.getItem('token') != undefined){
      this.logeado = true;
    }
  }
}
