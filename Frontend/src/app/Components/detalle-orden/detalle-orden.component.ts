import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/sorder/order.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.scss']
})
export class DetalleOrdenComponent implements OnInit {

  constructor(public service: OrderService, private router: Router, private route: ActivatedRoute) { }
  id = String(this.route.snapshot.params['id']);
  fecha: string;
  restaurante: string;
  direccion: string;
  cliente: string;
  estado: string;
  products = [];


  ngOnInit() {
    if (localStorage.getItem('logued') !== '1') {
      localStorage.setItem('logued', '0');
      this.router.navigate(['login']);
    }
    this.getData();
  }

  async getData() {
    console.log(this.id);
    try {
      const result = this.service.getOrder(this.id);
      this.displaydata((await result).data);
    } catch (error) {
      console.log(error);
    }
  }

  displaydata(data: any) {
    this.fecha = data.createdAt;
    this.restaurante = data.restaurantId.name;
    this.direccion = data.address;
    this.cliente = data.userId.name;
    this.estado = data.status._id;
  }

  async editar() {
    try {
      const result = this.service.modifyOrder(this.id, this.estado);
      this.displaydata((await result).data);
      this.router.navigate(['estadorestaurante']);
    } catch (error) {
      console.log(error);
    }
  }

}
