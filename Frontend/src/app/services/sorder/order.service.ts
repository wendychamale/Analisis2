import { Injectable } from '@angular/core';
import { ClientService } from '../sclient/client.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public service: ClientService) { }
  api = 'http://34.72.84.41:5000';

  async getClientOrders() {
    const user = this.service.getUser();
    console.log((await user).data._id);
    return await axios.get(`${this.api}/order/user/` + (await user).data._id);
  }

  async getRestaurantOrders() {
    const user = this.service.getUser();
    console.log((await user).data._id);
    return await axios.get(`${this.api}/order/restaurant/` + (await user).data._id);
  }

  async getallOrders() {
    const user = this.service.getUser();
    console.log((await user).data._id);
    return await axios.get(`${this.api}/order`);
  }

  async deleteOrder(id: string) {
    return await axios.delete(`${this.api}/order/` + id);
  }

  async getOrder(id: string) {
    return await axios.get(`${this.api}/order/` + id);
  }

  async modifyOrder(id: string, estado: string) {
    return await axios.put(`${this.api}/order/` + id, {
      'status': estado
    });
  }

}
