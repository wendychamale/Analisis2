import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/sorder/order.service';

@Component({
  selector: 'app-estado-orden-restaurante',
  templateUrl: './estado-orden-restaurante.component.html',
  styleUrls: ['./estado-orden-restaurante.component.scss']
})
export class EstadoOrdenRestauranteComponent implements OnInit {

  constructor(public service: OrderService, private router: Router) { }
  ordenes = [];

  ngOnInit() {
    if (localStorage.getItem('logued') !== '1') {
      localStorage.setItem('logued', '0');
      this.router.navigate(['login']);
    }
    this.getData();
  }

  async getData() {
    if (localStorage.getItem('userType') === '2') {
      try {
        const result = this.service.getRestaurantOrders();
        this.ordenes = (await result).data;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = this.service.getallOrders();
        this.ordenes = (await result).data;
      } catch (error) {
        console.log(error);
      }
    }

  }

  editar(id: string) {
    this.router.navigate(['detalleOrden', id]);
  }

  async cancelar(id: string) {
    try {
      const result = this.service.deleteOrder(id);
      console.log((await result).data);
      alert('La orden ha sido eliminada de la lista');
      this.getData();
    } catch (error) {
      if (error.response) {
        alert('La orden no ha podido ser eliminado');
      }
    }
  }

}
