import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';
import { ClientService } from 'src/app/services/sclient/client.service';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(public service: ClientService, private router: Router, private http: HttpClient) { }
  correo: string;
  contra: string;
  incorrecto = false;

  ngOnInit() {
    if (localStorage.getItem('logued') === '1') {
      localStorage.setItem('logued', '0');
      localStorage.removeItem('LCarrito');
      localStorage.removeItem('idrestaurante');
      localStorage.removeItem('domiciliorestaurante');
      localStorage.removeItem('idusuario');
      delete axios.defaults.headers.common['x-auth-token'];
      this.router.navigate(['login']);
    }
    Utils.indices = [
      {
        title: 'Ingresar',
        url: '/login',
        icon: 'mdi-account-circle'
    },
    {
        title: 'Registrarse',
        url: '/registro',
        icon: 'mdi-account-multiple-plus'
    },
    {
        title: 'Comprar como invitado',
        url: '/restaurantes',
        icon: 'mdi-food'
      }
    ];
  }
  cancelar() {
    this.correo = '';
    this.contra = '';
    this.incorrecto = false;
  }

  async entrar() {

    try {
      const result = this.service.login(this.correo, this.contra);
      console.log((await result).data.token);
      axios.defaults.headers.common['x-auth-token'] = (await result).data.token;
      const user = this.service.getUser();
      console.log((await user).data);
      localStorage.setItem('userType', (await user).data.type);
      localStorage.setItem('logued', '1');
      localStorage.setItem('idusuario',(await user).data._id);
      switch ((await user).data.type) {
        case 1:
          Utils.indices = [
            {
              title: 'Catalogo Productos',
              url: '/restaurantes',
              icon: 'mdi-food'
            },
            {
              title: 'Carrito de Compras',
              url: '/carrito',
              icon: 'mdi-cart'
            },
            {
              title: 'Comprar Orden',
              url: '/finalizacionorden',
              icon: 'mdi-cash'
            },
            {
              title: 'Estado Ordenes',
              url: '/estadorestaurante',
              icon: 'mdi-clock'
            }
          ];
          break;
        case 2:
          Utils.indices = [
            {
              title: 'Mis Productos',
              url: '/productos',
              icon: 'mdi-food-fork-drink'
            },
            {
              title: 'Estado Ordenes',
              url: '/estadorestaurante',
              icon: 'mdi-clock'
            }
          ];
          break;
        case 3:
          Utils.indices = [
            {
              title: 'Catalogo Productos',
              url: '/restaurantes',
              icon: 'mdi-food'
            },
            {
              title: 'Carrito de Compras',
              url: '/carrito',
              icon: 'mdi-cart'
            },
            {
              title: 'Comprar Orden',
              url: '/finalizacionorden',
              icon: 'mdi-cash'
            },
            {
              title: 'Estado Ordenes',
              url: '/estadocliente',
              icon: 'mdi-timelapse'
            }
          ];
          break;
      }
      Utils.indices.push(
        {
          title: 'Cerrar Sesión',
          url: '/login',
          icon: 'mdi-exit-to-app'
        }
      );
      this.router.navigate(['landing']);
    } catch (error) {
      if (error.response) {
        const cadena = ' <div class="alert alert-danger" role="alert"> USuario y/o contraseña invalida </div>';
        document.getElementById('resultado').innerHTML = cadena;
      }
      this.cancelar();
    }
  }
}
