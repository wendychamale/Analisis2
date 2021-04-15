import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/sproduct/product.service";
import { ClientService } from "../../services/sclient/client.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-finalizacionorden',
  templateUrl: './finalizacionorden.component.html',
  styleUrls: ['./finalizacionorden.component.scss']
})
export class FinalizacionordenComponent implements OnInit {

  constructor(public service1: ClientService, public service: ProductService, public router: Router) { }
  ListaC: string = localStorage.getItem('LCarrito');
  idrestaurante: string = localStorage.getItem('idrestaurante');
  idusuario: string = "";
  domiciliorestaurante: string = localStorage.getItem('domiciliorestaurante');
  Datos: any;
  domicilios: string = "";
  tarjeta: string;
  envioDomicilio = false;
  direccionUsuario: string;
  ngOnInit() {
    this.getData();
    this.llenartabla();

  }
  total = 0;
  Lproductos: any = [];
  domicilio: string = "";
  confi = 0;
  confirmar() {
    if (this.domicilio != '') {
      this.domicilios = this.domicilio;
    } else {
      this.domicilios = this.domiciliorestaurante;
    }

  }

  async getData() {
    try {
      const result = this.service1.getUser();
      this.idusuario = (await result).data._id;
      this.direccionUsuario = (await result).data.domicilio;
      console.log(this.idusuario);
    } catch (error) {
      console.log(error);
    }
  }

  cambioEnvio() {
    console.log(this.tarjeta);
    if (this.tarjeta === 'false') {
      this.envioDomicilio = false;
      this.domicilio =  '';
    } else {
      this.envioDomicilio = true;
      this.domicilio = this.direccionUsuario;
    }
  }

  adress = "";
  status = 1;
  restaurantId = "";
  userId = "";
  productList = [];

  llenartabla() {
    if (this.ListaC != '') {
      this.Datos = JSON.parse(this.ListaC);
      console.log(this.Datos);
      for (let i = 0; i < this.Datos.length; i++) {
        for (let j = 0; j < this.Datos[i].cantidad; j++) {
          this.Lproductos.push(this.Datos[i]._id);
        }
      }
    }
    this.domicilios = this.domiciliorestaurante;
    this.status = 1;
    this.restaurantId = this.idrestaurante;
    this.userId = this.idusuario;
    this.productList = this.Lproductos;
  }
  async crearorden() {
    this.confirmar();
    if (this.idusuario != '') {
      try {
        const result = this.service.newOrder(this.domicilios, this.status, this.restaurantId, this.idusuario, this.productList);
        console.log((await result).data);
        var a: any = [];
        localStorage.removeItem('LCarrito');
        alert(' orden generada');

      } catch (error) {
        if (error.response) {
          alert("error");
        }
      }
    } else {
      try {
        const result = this.service.newOrder1(this.domicilios, this.status, this.restaurantId, this.productList);
        console.log((await result).data);
        var a: any = [];
        localStorage.removeItem('LCarrito');
        alert(' orden generada');

      } catch (error) {
        if (error.response) {
          alert('error ');
        }
      }
    }

  }

}
