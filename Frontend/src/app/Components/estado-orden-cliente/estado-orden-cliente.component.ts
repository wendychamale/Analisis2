import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/sorder/order.service';

@Component({
  selector: 'app-estado-orden-cliente',
  templateUrl: './estado-orden-cliente.component.html',
  styleUrls: ['./estado-orden-cliente.component.scss']
})
export class EstadoOrdenClienteComponent implements OnInit {

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
    try {
      const result = this.service.getClientOrders();
      this.ordenes = (await result).data;
    } catch (error) {
      console.log(error);
    }
  }
}
