import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {
    api = 'http://34.72.84.41:5000';

  constructor() { }

  async getData() {
    return await axios.get(`${this.api}/product?limit=10000`);
  }

  async newProduct(base64: string, nombre: string, precio: number, descripcion: string) {
    return await axios.post(`${this.api}/product`, {
      'name': nombre,
      'price': precio,
      'description': descripcion,
      'imgBinary': base64
    });
  }

  async deleteProduct(id: string) {
    return await axios.delete(`${this.api}/product/` + id);
  }

  async getProduct(id: string) {
    return await axios.get(`${this.api}/product/` + id);
  }

  async modifyProductImagen(id: string, nombre: string, precio: number, descripcion: string, base64: string) {
    await axios.put(`${this.api}/product/image/` + id, {
      'imgBinary': base64
    });
    return await axios.put(`${this.api}/product/` + id, {
      'name': nombre,
      'price': precio,
      'description': descripcion
    });
  }

  async modifyProduct(id: string, nombre: string, precio: number, descripcion: string) {
    return await axios.put(`${this.api}/product/` + id, {
      'name': nombre,
      'price': precio,
      'description': descripcion
    });
  }
}
