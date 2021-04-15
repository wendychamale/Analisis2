import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCrudService } from 'src/app/services/sproduct/product-crud.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  constructor(public service: ProductCrudService, private router: Router, private route: ActivatedRoute) { }
  id = String(this.route.snapshot.params['id']);
  cardImageBase64: string;
  nuevo_nombre: string;
  nuevo_precio: number;
  nuevo_descripcion: string;
  url = '../assets/images/default/default.png';

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
      const result = this.service.getProduct(this.id);
      this.displaydata((await result).data);
    } catch (error) {
      console.log(error);
    }
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
          console.log(imgBase64Path);
          this.cardImageBase64 = imgBase64Path;
          this.url = event.target.result;
        };
      };
    }
  }

  displaydata(data: any) {
    this.nuevo_nombre = data.name;
    this.nuevo_precio = data.price;
    this.nuevo_descripcion = data.description;
    this.url = data.imgUrl;
  }

  async editar() {
    try {
      if (this.cardImageBase64 == null) {
        const result = this.service.modifyProduct(this.id, this.nuevo_nombre, this.nuevo_precio, this.nuevo_descripcion);
      this.displaydata((await result).data);
      this.router.navigate(['productos']);
      } else {
        // tslint:disable-next-line: max-line-length
        const result = this.service.modifyProductImagen(this.id, this.nuevo_nombre, this.nuevo_precio, this.nuevo_descripcion, this.cardImageBase64);
        this.displaydata((await result).data);
        this.router.navigate(['productos']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
