import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataInfo: any[] = [];
  idpersonaje: any[] = [];
  personajeSelecionado: any;
  showModal = false;

  constructor(private api: ApiService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {

    this.authService.get('favorite').subscribe( (resp2: any) => {
      console.log(resp2);
      resp2.data.forEach( (element: any, index: number) => {
        this.idpersonaje.push(element.ref_api);
      })
      
      this.showPersonajes();
    }, error => {
      this.showPersonajes();
    });

    
  }

  addFavorite( element: any){
    
    let data = {
      ref_api: element.id
    }
    this.authService.post('favorite', data).subscribe((res: any) => {
      console.log(res); 
      if(res.message == "Elemento eliminado de favorito con exito.")
        element.favorite = false;
      else
        element.favorite = true;
      
    })
  }

  showPersonajes(){
    this.api.getPokemons('character').subscribe( (res: any) => {
      res.results.forEach((element: any) => {
        
        if(this.idpersonaje.indexOf(element.id.toString()) >= 0){
          element.favorite = true;
        } else {
          element.favorite = false;
        }

        this.dataInfo.push(element);
       
      });
    })
  }

  varItem(item: any){
    this.api.getPokemons('character/'+item.id).subscribe( (res: any) => {
      console.log(this.idpersonaje);
      this.showModal = true;

      if(this.idpersonaje.indexOf(res.id.toString()) >= 0)
        res.favorite = true;
      else
        res.favorite = false;

      this.personajeSelecionado = res;
    })
  }

  close(){
    this.showModal = false;
  }

}
