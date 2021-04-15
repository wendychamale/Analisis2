import { Component, OnInit } from '@angular/core';
import {  ProductService} from "../../services/sproduct/product.service";
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detalleproductos',
  templateUrl: './detalleproductos.component.html',
  styleUrls: ['./detalleproductos.component.css']
})
export class DetalleproductosComponent implements OnInit {

  constructor(public service: ProductService, public router: Router,public router1: ActivatedRoute) {

  }
  ListaC: string = localStorage.getItem('LCarrito');
  idr:string=localStorage.getItem('idrestaurante');
  idp = String(this.router1.snapshot.params['id']);
  cards: any = [];
  Datos: any;
  Lproductos: any = [];

  ngOnInit(): void {
    this.obtenerproductos();
  }
  createdAt:String= "";
  description:String= "";
  discounts: number = 0;
  imgUrl:String="";
  name:String= "";
  price:number= 0;

  error = false;
  obtenerproductos(){
    this.service.getProduct(0)
      .subscribe(
        res => {
          console.log(res.data);
          this.cards=res.data;
          for (let i = 0; i < this.cards.length; i++) {
             if(this.cards[i].restaurantId._id==this.idr  && this.cards[i]._id==this.idp ){
              this.createdAt= this.cards[i].createdAt;
              this.description= this.cards[i].description;
              this.discounts = this.cards[i].discounts;
              this.imgUrl=this.cards[i].imgUrl;
              this.name=this.cards[i].name;
              this.price= this.cards[i].price;
              console.log(this.name);
             }
             }
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
        document.getElementById('res').innerHTML =cadena;      
        break;
      }
    }
    if(existe == 0)
    {
      this.Lproductos.push({idr:this.idr, name:nombre ,description:descripcion,cantidad:1,precio:price,imagen:imgUrl,_id:id,discounts:discount});
      this.service.setdatos(this.Lproductos) 
      var cadena=" <div class=\"alert alert-success\" role=\"alert\">Producto Agregado Correctamente!! </div>"
      document.getElementById('res').innerHTML =cadena;
    }
    var u = localStorage.getItem('Lcarrito');
    console.log(u);
  }
  ircarrito(){
    this.router.navigate(['carrito']);
  }

}
