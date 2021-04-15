import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  api: "http://34.72.84.41:5000"
  constructor(private http: HttpClient) { }
  
  getProduct(cont) {
    return this.http.get<any>(`http://34.72.84.41:5000/product?limit=100`);
  }
  getProduct1() {
    return this.http.get<any>(`http://34.72.84.41:5000/product`);
  }
  setdatos(product: any) {
    let p_carrito = JSON.stringify(product);
    localStorage.setItem('LCarrito', p_carrito);
  }
  setdres(res: any,domicilio : any) {
    localStorage.setItem('idrestaurante', res);
    localStorage.setItem('domiciliorestaurante', domicilio);
  }
  deletedatos() {
    localStorage.removeItem('LCarrito');
    localStorage.removeItem('idrestaurante');
    localStorage.removeItem('domiciliorestaurante');
  }
  

  crearorden(orden){
    return this.http.post<any>(`http://34.72.84.41:5000/order`,orden);
  }

  async newOrder(adress: string, status: number, restaurantId: string,userId:string, productList:any) {
    var v={
      'address': adress,
      'status': status,
      'restaurantId':restaurantId,
      'userId':userId,
      'productsList':productList
    }
    console.log(v);
    return await axios.post(`http://34.72.84.41:5000/order`, v);
  }
  async newOrder1(adress: string, status: number, restaurantId: string, productList:any) {
    var v={
      'address': adress,
      'status': status,
      'restaurantId':restaurantId,
      'productsList':productList
    }
    console.log(v);
    return await axios.post(`http://34.72.84.41:5000/order`, v);
  }

}
