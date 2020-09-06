import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormularioFormaPagoComponent } from './components/formulario-forma-pago/formulario-forma-pago.component';
import { PedidoComercioAdheridoComponent } from './page/pedido-comercio-adherido/pedido-comercio-adherido.component';
import { FormularioDireccionComponent } from './components/formulario-direccion/formulario-direccion.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    FormularioFormaPagoComponent,
    PedidoComercioAdheridoComponent,
    FormularioDireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
