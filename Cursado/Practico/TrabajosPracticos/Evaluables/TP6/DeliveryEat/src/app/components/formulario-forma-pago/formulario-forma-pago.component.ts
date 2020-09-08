import { Component, OnInit } from '@angular/core';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service';
import { DatosCompartidos } from 'src/app/models/datosCompartidos';

@Component({
  selector: 'app-formulario-forma-pago',
  templateUrl: './formulario-forma-pago.component.html',
  styleUrls: ['./formulario-forma-pago.component.css']
})
export class FormularioFormaPagoComponent implements OnInit {

  esTarjeta: boolean = false;
  esEfectivo: boolean = true;
  vuelto: number;
  montoInferior: boolean = false;
  mensajeError: string;
  mostrarVuelto: boolean = false;



  datosCompartidos: DatosCompartidos;

  constructor(private data: DatosCompartidosService) { }

  ngOnInit(): void {
    this.data.currentDatosCompartidos.subscribe(datosCompartidos => this.datosCompartidos = datosCompartidos);
  }


  metodoPago() {
    this.esEfectivo = !this.esEfectivo;
    this.esTarjeta = !this.esTarjeta;

    this.datosCompartidos.metodoPagoVisa = this.esTarjeta;
    this.data.cambiarDatosCompartidos(this.datosCompartidos);
  }

  calcularVuelto(e) {
    if (isNaN(parseInt((e.target as HTMLInputElement).value))) {
      this.montoInferior = true;
      this.mostrarVuelto = false;
      this.mensajeError = 'Campo requerido';
      return
    }
    this.vuelto = parseInt((e.target as HTMLInputElement).value) - 4000;
    if (this.vuelto < 0) {
      this.montoInferior = true;
      this.mostrarVuelto = false;
      this.mensajeError = 'El monto ingresado es inferior al total de la compra';
      this.datosCompartidos.vuelto = "";
      this.datosCompartidos.montoApagar = "";
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
      return
    }
    this.montoInferior = false;
    this.mostrarVuelto = true;

    this.datosCompartidos.vuelto = this.vuelto.toString();
    this.datosCompartidos.montoApagar = (e.target as HTMLInputElement).value;
    this.data.cambiarDatosCompartidos(this.datosCompartidos);
  }

  validarLenght(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 6) { (event.target as HTMLInputElement).value = value.slice(0, 6); };
    if (parseInt(value) <= 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }
  }

}
