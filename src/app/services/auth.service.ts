import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  sendLogin(data: any) {
    const url =`${ environment.urlBase }/api/login`;
    return this.http.post(url, data);
  }

  logout(){
    const route =`${ environment.urlBase }/api/logout`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`,
    });
    return this.http.post(route, null, {headers});
  }

  get(url: string){
    const route =`${ environment.urlBase }/api/${url}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`,
    });
    return this.http.get(route, {headers});
  }

  post(url: string, data: any){
    const route =`${ environment.urlBase }/api/${url}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ localStorage.getItem('token') }`,
    });
    return this.http.post(route, data, {headers});
  }


  
}
