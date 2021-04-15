import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';
import { EstadoOrdenClienteComponent } from './Components/estado-orden-cliente/estado-orden-cliente.component';
import { EstadoOrdenRestauranteComponent } from './Components/estado-orden-restaurante/estado-orden-restaurante.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { Landing1Component } from './Components/landing1/landing1.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { CatalogoPComponent } from './Components/catalogo-p/catalogo-p.component';
import { FinalizacionordenComponent } from './Components/finalizacionorden/finalizacionorden.component';
import { RestaurantesComponent } from './Components/restaurantes/restaurantes.component';
import { EditarProductoComponent } from './Components/editar-producto/editar-producto.component';
import { DetalleOrdenComponent } from './Components/detalle-orden/detalle-orden.component';
import { DetalleproductosComponent } from './Components/detalleproductos/detalleproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    EstadoOrdenClienteComponent,
    EstadoOrdenRestauranteComponent,
    ProductosComponent,
    Landing1Component,
    CarritoComponent,
    CatalogoPComponent,
    FinalizacionordenComponent,
    RestaurantesComponent,
    EditarProductoComponent,
    DetalleOrdenComponent,
    DetalleproductosComponent,
],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
  ],
  exports: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
