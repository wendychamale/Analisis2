import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  api = 'http://34.72.84.41:5000';

  constructor(private http: HttpClient) {
  }

  Registro(usuario: { name: string; email: string; password: string; domicilio: string; type: number; }) {
    console.log(usuario);
    return this.http.post<any>(`${this.api}/client`, usuario);
  }

  async login(correo: string, password: string) {
    return await axios.post(`${this.api}/auth/login`, {
      'email': correo,
      'password': password
    });
  }

  async getUser() {
    return await axios.get(`${this.api}/auth/getUser`);
  }

  getClient1() {
    return this.http.get<any>(`http://34.72.84.41:5000/client/`);
  }

  getr(name: string ) {
    console.log(name);
    return this.http.get<any>(`http://34.72.84.41:5000/client/${name}`);
  }
}
