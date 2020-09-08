import { Component, OnInit } from '@angular/core';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service'

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



  constructor(private data: DatosCompartidosService) { }

  ngOnInit(): void {

  }



  metodoPago() {
    this.esEfectivo = !this.esEfectivo;
    this.esTarjeta = !this.esTarjeta;
    console.log(this.esEfectivo);
    console.log(this.esTarjeta);
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
      return
    }
    this.montoInferior = false;
    this.mostrarVuelto = true;
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
