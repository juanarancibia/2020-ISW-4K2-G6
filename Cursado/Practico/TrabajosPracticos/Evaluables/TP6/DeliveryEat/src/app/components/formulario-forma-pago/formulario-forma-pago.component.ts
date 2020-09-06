import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-forma-pago',
  templateUrl: './formulario-forma-pago.component.html',
  styleUrls: ['./formulario-forma-pago.component.css']
})
export class FormularioFormaPagoComponent implements OnInit {

  esTarjeta: boolean = false;
  esEfectivo: boolean = true;
  vuelto: number;

  constructor() { }

  ngOnInit(): void {
  }


  metodoPago() {
    this.esEfectivo = !this.esEfectivo;
    this.esTarjeta = !this.esTarjeta;
    console.log(this.esEfectivo);
    console.log(this.esTarjeta);
  }

  calcularVuelto(e){
    this.vuelto = parseInt((e.target as HTMLInputElement).value);
    console.log(this.vuelto);
  }


}
