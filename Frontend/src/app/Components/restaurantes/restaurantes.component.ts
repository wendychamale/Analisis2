import { Component, OnInit } from '@angular/core';
import {  ClientService} from "../../services/sclient/client.service";
import {  ProductService} from "../../services/sproduct/product.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {

  constructor(public service1: ClientService,public service: ProductService, public router: Router) { }

  restaurante: any = [];
   error = false;
   precio: any = [];
   Lrestaurantes: any = [];
   idusuario:string="";
  Lproductos: any = [];
   ngOnInit() {
     this.getData();
     this.obtenerproductos();
   
   }
   async getData() {
    try {
      const result = this.service1.getUser();
      this.idusuario = (await result).data._id;
      console.log(this.idusuario);
    } catch (error) {
      console.log(error);
    }
  }
 
   contador=0;
 
   obtenerproductos(){
     this.service.getProduct(100)
       .subscribe(
         res => {
           this.restaurante=res.data;
           console.log(this.restaurante);
           for (let i = 0; i < this.restaurante.length; i++) {
            var bandera=0;
              console.log("aqui");
               if(this.Lrestaurantes.length>0){
                 
                for (let j = 0; j < this.Lrestaurantes.length; j++) {
                   if(this.restaurante[i].restaurantId._id==this.Lrestaurantes[j].id ){
                    bandera=1;
                   }
                }
                if(bandera==0){
                  this.Lrestaurantes.push({id:this.restaurante[i].restaurantId._id,name:this.restaurante[i].restaurantId.name ,domicilio:this.restaurante[i].restaurantId.domicilio,tipo:this.restaurante[i].restaurantId.type});
                }
               }else{
                this.Lrestaurantes.push({id:this.restaurante[i].restaurantId._id,name:this.restaurante[i].restaurantId.name ,domicilio:this.restaurante[i].restaurantId.domicilio,tipo:this.restaurante[i].restaurantId.type});
               }   
             
           }

            console.log(this.Lrestaurantes)
         },
         err => this.error = true
       )
      
   }
 
   almacenar(id,domicilio,nombre)
   {
      var idr=localStorage.getItem('idrestaurante');
      if(idr==id){
      }else{
        this.service.deletedatos();
      }
     this.service.setdres(id,domicilio);
     this.router.navigate(['catalogo-p']);
   }
}
