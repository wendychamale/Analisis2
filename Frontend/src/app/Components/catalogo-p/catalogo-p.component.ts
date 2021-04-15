import { Component, OnInit } from '@angular/core';
import {  ProductService} from "../../services/sproduct/product.service";
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-catalogo-p',
  templateUrl: './catalogo-p.component.html',
  styleUrls: ['./catalogo-p.component.scss']
})
export class CatalogoPComponent implements OnInit {
  
  constructor(public service: ProductService, public router: Router,public router1: ActivatedRoute) {}
  ListaC: string = localStorage.getItem('LCarrito');
  idr:string=localStorage.getItem('idrestaurante');
  Datos: any;
 cards: any = [];
 card: any = [];
 cards1: any = [];
  error = false;
  precio: any = [];
  Lproductos: any = [];
  noferta=0;
  np=0;
  ngOnInit() {
    this.obtenerproductos()
  }

  contador=0;

contar(){
    this.service.getProduct1()
      .subscribe(
        res => {
         
          this.contador=res.count;
          console.log(this.contador);

        },
        err => this.error = true
      )
  }

  obtenerproductos(){
 
    this.np=0;
    this.noferta=0;
    this.service.getProduct(this.contador)
      .subscribe(
        res => {
          console.log(res.data);
          console.log(this.idr);
          this.cards1=res.data;
          for (let i = 0; i < this.cards1.length; i++) {
             if(this.cards1[i].restaurantId._id==this.idr ){
               if(this.cards1[i].discounts==0){
                this.cards.push(this.cards1[i]);
                this.np+=this.np+1;
               }else  if(this.cards1[i].discounts>0){
                this.card.push(this.cards1[i]);
                this.noferta+=this.noferta+1;
               }
         
             }
             }
             console.log(this.cards)
        },
        err => this.error = true
      )
      
  }

  
  almacenar(nombre,descripcion,price,imgUrl,id,discount)
  {
    if (this.ListaC != null) {
      this.Datos = JSON.parse(this.ListaC);
      console.log(this.Datos)
      this.Lproductos=this.Datos;
    
    }

    console.log(this.Lproductos)
    var existe = 0;
    for (let i = 0; i < this.Lproductos.length; i++) {
      if (this.Lproductos[i].name == nombre &&this.Lproductos[i].precio == price) {
        this.Lproductos[i].cantidad += 1;
        this.service.setdatos(this.Lproductos);
        existe = 1;
      var cadena=" <div class=\"alert alert-success\" role=\"alert\">Producto Agregado Correctamente!! </div>"
        var n=nombre+price+"";
        document.getElementById(n).innerHTML =cadena;      
        break;
      }
    }
    if(existe == 0)
    {
      this.Lproductos.push({idr:this.idr, name:nombre ,description:descripcion,cantidad:1,precio:price,imagen:imgUrl,_id:id,discounts:discount});
      this.service.setdatos(this.Lproductos) 
      var cadena=" <div class=\"alert alert-success\" role=\"alert\">Producto Agregado Correctamente!! </div>"
      var n=nombre+price+"";
      document.getElementById(n).innerHTML =cadena;
   
    }

    var u = localStorage.getItem('Lcarrito');
    console.log(u);
  }
  ircarrito(){
    this.router.navigate(['carrito']);
  }

  verp(id){
    this.router.navigate(['detalleproductos',id]);
  }
}
