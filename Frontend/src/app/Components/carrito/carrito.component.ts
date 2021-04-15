import { Component, OnInit } from '@angular/core';
import {  ProductService} from "../../services/sproduct/product.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  ListaC: string = localStorage.getItem('LCarrito');
  Datos: any;
  constructor(public service: ProductService, public router: Router) { }

  ngOnInit() {
    this.llenartabla()
  }
  total = 0;
  llenartabla() {
    if (this.ListaC != '') {
      this.Datos = JSON.parse(this.ListaC);
      console.log(this.Datos);
      this.PagoTotal()
    }
  }
  PagoTotal() {
    if (this.ListaC != '') {
      for (let i = 0; i < this.Datos.length; i++) {
        this.total +=( this.Datos[i].precio * this.Datos[i].cantidad ) -  ((( this.Datos[i].discounts * this.Datos[i].precio ) / 100 ) * this.Datos[i].cantidad );
      }
    }
   console.log(this.total);
  }
  irorden(){
    this.router.navigate(['finalizacionorden']);
  }

  eliminar(_id){
    var falso =false;
    if (this.ListaC != '') {
      console.log("sssi");
      for (let i = 0; i < this.Datos.length; i++) {
        console.log(this.Datos[i]._id, "---",_id);
        if(this.Datos[i]._id == _id ){
          if(this.Datos[i].cantidad>1){
            this.Datos[i].cantidad= this.Datos[i].cantidad-1;
            this.total=0;
            this.PagoTotal();
          }else{
            var indice = this.Datos.indexOf(i);
            this.Datos.splice(indice, 1); 
            console.log( this.Datos );
            this.total=0;
            this.PagoTotal();
          }
         this.service.setdatos(this.Datos);
          var cadena=" <div class=\"alert alert-success\" role=\"alert\">Producto Eliminado Correctamente!! </div>"
          document.getElementById(_id).innerHTML =cadena;   
          falso=true; 
          break;
        }else{
          falso=false;
        }
        
      }
    }

    if (falso== false){
      this.service.setdatos(this.Datos);
      var cadena=" <div class=\"alert alert-danger\" role=\"alert\">No se pudo eliminar!! </div>"
      document.getElementById(_id).innerHTML =cadena;    
  
    }
  
  }

}
