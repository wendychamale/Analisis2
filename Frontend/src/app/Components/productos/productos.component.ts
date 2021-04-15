import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCrudService } from 'src/app/services/sproduct/product-crud.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(public serviceProduct: ProductCrudService, private router: Router) { }
  productos = [];
  productos_temp = [];
  url = '../assets/images/default/default.png';
  cardImageBase64: string;
  nuevo_nombre: string;
  nuevo_precio: number;
  nuevo_descripcion: string;
  restaurante_id: string;

  ngOnInit() {
    if (localStorage.getItem('logued') !== '1') {
      localStorage.setItem('logued', '0');
      this.router.navigate(['login']);
    }
    this.getData();
  }

  async getData() {
    this.restaurante_id = localStorage.getItem('idusuario');
    try {
      const result = this.serviceProduct.getData();
      this.productos_temp = (await result).data.data;
      this.productos_temp.forEach(producto => {
        if (producto.restaurantId._id === this.restaurante_id) {
          this.productos.push(producto);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  editar(id: string) {
    this.router.navigate(['editarProducto', id]);
  }

  async eliminar(id: string) {
    try {
      const result = this.serviceProduct.deleteProduct(id);
      alert('El producto ha sido eliminado del catalogo');
      this.getData();
      this.cancelar();
    } catch (error) {
      if (error.response) {
        alert('El producto no ha podido ser eliminado');
      }
    }
  }

  async agregar() {
    try {
      const result = this.serviceProduct.newProduct(this.cardImageBase64, this.nuevo_nombre, this.nuevo_precio, this.nuevo_descripcion);
      alert(this.nuevo_nombre + ' agregado al catalogo');
      this.getData();
      this.cancelar();
    } catch (error) {
      if (error.response) {
        alert('El producto no ha podido ser creado');
      }
      this.cancelar();
    }
  }

  cancelar() {
    this.nuevo_descripcion = '';
    this.nuevo_nombre = '';
    this.nuevo_precio = null;
    this.url = '../assets/images/default/default.png';
  }

  onFileSelected(event: { target: { files: Blob[]; }; }) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;
        image.onload = rs => {
          const imgBase64Path = event.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.url = event.target.result;
        };
      };
    }
  }
}
