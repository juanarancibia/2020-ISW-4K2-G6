import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormularioFormaPagoComponent } from './components/formulario-forma-pago/formulario-forma-pago.component';
import { PedidoComercioAdheridoComponent } from './page/pedido-comercio-adherido/pedido-comercio-adherido.component';
import { FormularioDireccionComponent } from './components/formulario-direccion/formulario-direccion.component';
import { FormularioTarjetaComponent } from './components/formulario-tarjeta/formulario-tarjeta.component';
import { FormularioEntregaComponent } from './components/formulario-entrega/formulario-entrega.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    FormularioFormaPagoComponent,
    PedidoComercioAdheridoComponent,
    FormularioDireccionComponent,
    FormularioTarjetaComponent,
    FormularioEntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
