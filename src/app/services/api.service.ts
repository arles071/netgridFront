import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  getPokemons(url: string){
    const route = `${environment.urlApi}${url}`;
    return this.http.get(route)
  }

  get(url: string){
    const route = `${environment.urlBase}${url}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`,
    });
    return this.http.get(route, {headers})
  }
}
