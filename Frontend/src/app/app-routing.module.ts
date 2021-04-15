

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './components/registro/registro.component';


import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { EstadoOrdenClienteComponent } from './Components/estado-orden-cliente/estado-orden-cliente.component';
import { EstadoOrdenRestauranteComponent } from './Components/estado-orden-restaurante/estado-orden-restaurante.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { Landing1Component } from './Components/landing1/landing1.component';
import { CatalogoPComponent } from './Components/catalogo-p/catalogo-p.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import {FinalizacionordenComponent} from './Components/finalizacionorden/finalizacionorden.component';
import { RestaurantesComponent } from './Components/restaurantes/restaurantes.component';
import { EditarProductoComponent } from './Components/editar-producto/editar-producto.component';
import { DetalleOrdenComponent } from './Components/detalle-orden/detalle-orden.component';
import { DetalleproductosComponent } from './Components/detalleproductos/detalleproductos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'carrito', component: CarritoComponent },
  { path: 'estadocliente', component: EstadoOrdenClienteComponent},
  { path: 'estadorestaurante', component: EstadoOrdenRestauranteComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'landing', component: Landing1Component},
  { path: 'catalogo-p', component: CatalogoPComponent },
  { path: 'finalizacionorden', component: FinalizacionordenComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'editarProducto/:id', component: EditarProductoComponent},
  { path: 'detalleOrden/:id', component: DetalleOrdenComponent},
  { path: 'detalleproductos/:id', component: DetalleproductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
