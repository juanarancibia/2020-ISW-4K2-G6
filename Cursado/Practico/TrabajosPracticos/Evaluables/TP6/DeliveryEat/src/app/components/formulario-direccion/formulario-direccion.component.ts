import { Component, OnInit } from '@angular/core';
import { DatosCompartidos } from 'src/app/models/datosCompartidos';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.css']
})
export class FormularioDireccionComponent implements OnInit {

  datosCompartidos: DatosCompartidos;

  constructor(private data: DatosCompartidosService) { }

  ngOnInit(): void {
    this.data.currentDatosCompartidos.subscribe(datosCompartidos => this.datosCompartidos = datosCompartidos);
  }

  validarLength(e) {
    var value = (e.target as HTMLInputElement).value;
    if (value.length > 4) {
      (e.target as HTMLInputElement).value = value.slice(0, 4);
    }
    if (parseInt(value) <= 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }
  }

  actualizarDireccion(e) {
    if ((e.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.direccion = (e.target as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
  actualizarNumero(e) {
    if ((e.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.numeroDireccion = (e.target as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
  actualizarCiudad(e) {
    if ((e.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.ciudad = (e.target as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
  actualizarOpcional(e) {
    if ((e.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.referenciaOpcional = (e.target as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
}

