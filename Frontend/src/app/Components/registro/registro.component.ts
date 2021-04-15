import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/sclient/client.service";

import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor( public service: ClientService, public router: Router) { }

  ngOnInit() {
  }

  user = {
    name: '',
    email: '',
    password: '',
    domicilio: '',
    type:0
  };


  name: string = "";
  email: string = "";
  password: string = "";
  domicilio: string = "";
  tipo:string="";



  registrar() {

    this.user.name = this.name;
    this.user.email = this.email;
    this.user.domicilio = this.domicilio;
    this.user.password = this.password;

    var mensaje="";

    if (this.tipo=="1"){
      this.user.type=1;
      mensaje="Administrador"
    }
    if (this.tipo=="2"){
      this.user.type=2;
      mensaje="Restaurante"
    }
    if (this.tipo=="3"){
      this.user.type=3;
      mensaje="Cliente"
    }

    this.service.Registro(this.user)
      .subscribe(
        res => {
          console.log(res);
         var cadena=" <div class=\"alert alert-success\" role=\"alert\">"+mensaje+" Registrado Exitosamente!! </div>"
          document.getElementById("resultado").innerHTML =cadena;
          this.limpiar();
        },
        err =>  {var cadena=" <div class=\"alert alert-danger\" role=\"alert\">Error No se pudo Registrar usuario :( </div>"
        document.getElementById("resultado").innerHTML =cadena;}
          
      )
  }

  limpiar() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.tipo ="";
    this.domicilio = '';
  }

 
  
}
