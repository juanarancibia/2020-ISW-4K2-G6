import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service';
import { DatosCompartidos } from 'src/app/models/datosCompartidos';

@Component({
  selector: 'app-formulario-entrega',
  templateUrl: './formulario-entrega.component.html',
  styleUrls: ['./formulario-entrega.component.css']
})
export class FormularioEntregaComponent implements OnInit {

  añoHasta: number;
  mesHasta: number;
  diaHasta: number;
  fechaHasta: any;
  fechaDesde: any;

  validacionErronea: boolean = false;

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  message: string;
  resumen: string = "";

  fecha: boolean = false;

  datosCompartidos: DatosCompartidos;

  constructor(private data: DatosCompartidosService) { }

  ngOnInit(): void {
    this.calcularFechaHasta();
    this.data.currentDatosCompartidos.subscribe(datosCompartidos => this.datosCompartidos = datosCompartidos);
  }

  calcularFechaHasta() {

    let fechaActual = moment();
    let fechaActualFormato = (fechaActual.format('L'));
    let fechaHasta = (fechaActual.add(30, "days")).format('L');
    let fechaActualEnPartes: string[] = fechaActualFormato.split("/");
    let fechaHastaEnPartes: string[] = fechaHasta.split("/");

    this.fechaDesde = { year: parseInt(fechaActualEnPartes[2]), month: parseInt(fechaActualEnPartes[0]), day: parseInt(fechaActualEnPartes[1]) };
    this.fechaHasta = { year: parseInt(fechaHastaEnPartes[2]), month: parseInt(fechaHastaEnPartes[0]), day: parseInt(fechaHastaEnPartes[1]) };
  }

  desplegarFechaHora() {
    this.fecha = !this.fecha;
    console.log(this.fecha);
    this.datosCompartidos.fechaSeleccionada = this.fecha;
    this.data.cambiarDatosCompartidos(this.datosCompartidos);
  }

  validarLenghtHora(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 2) { (event.target as HTMLInputElement).value = value.slice(0, 2); };
    if (parseInt(value) > 23 && value.length < 3) { (event.target as HTMLInputElement).value = value.slice(0, 1); };
    if (parseInt(value) < 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }

    if ((event.target as HTMLInputElement).id == "horas" && (event.target as HTMLInputElement).value.length == 2) {
      (document.getElementById("minutos") as HTMLInputElement).focus();
    }
  }
  validarLenghtMinuto(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 2) { (event.target as HTMLInputElement).value = value.slice(0, 2); };
    if (parseInt(value) > 59 && value.length < 3) { (event.target as HTMLInputElement).value = value.slice(0, 1); };
    if (parseInt(value) < 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }
    if (parseInt(value) < 45 && parseInt(value) > 15 && value.length == 2) { (event.target as HTMLInputElement).value = "30" }
    if (parseInt(value) <= 15 && parseInt(value) > 0 && value.length == 2) { (event.target as HTMLInputElement).value = "00" }
    if (parseInt(value) >= 45 && value.length == 2) {
      (event.target as HTMLInputElement).value = "00";
      if (parseInt((document.getElementById("horas") as HTMLInputElement).value) < 23) {
        (document.getElementById("horas") as HTMLInputElement).value = (parseInt((document.getElementById("horas") as HTMLInputElement).value) + 1).toString();
      } else {
        (document.getElementById("horas") as HTMLInputElement).value = "00"
      }
    }
  }


  actualizarMinutos(e) {
    if ((event.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.minutosEnvio = (event.target as HTMLInputElement).value;
      this.datosCompartidos.horaEnvio = (document.getElementById("horas") as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
  actualizarHoras(e) {
    if ((event.target as HTMLInputElement).value.length > 0) {
      this.datosCompartidos.horaEnvio = (event.target as HTMLInputElement).value;
      this.data.cambiarDatosCompartidos(this.datosCompartidos);
    }
  }
  actualizarFecha() {
    console.log(this.datosCompartidos.fechaSeleccionada);
    if (this.datosCompartidos.fechaSeleccionada) {
      if ((document.getElementById("fecha") as HTMLInputElement).value.length > 0) {
        this.datosCompartidos.fecha = ((document.getElementById("divFecha") as HTMLInputElement).firstChild as HTMLInputElement).value;
        this.data.cambiarDatosCompartidos(this.datosCompartidos);
      }
    }
  }

  validarHora() {
    if (this.datosCompartidos.fecha != "" && this.datosCompartidos.horaEnvio != "" && this.datosCompartidos.minutosEnvio != "") {
      if (this.datosCompartidos.fecha == moment().format('YYYY-MM-DD').toString()) {
        if (parseInt(this.datosCompartidos.horaEnvio) < parseInt(moment().format('HH').toString())) {
          alert("Por favor ingrese una hora posterior a la actual");
          this.validacionErronea = true;
        }
        else if (parseInt(this.datosCompartidos.horaEnvio) == parseInt(moment().format('HH'))) {
          console.log(parseInt(this.datosCompartidos.minutosEnvio) + "///" + parseInt(moment().format('MM')))
          if (parseInt(this.datosCompartidos.minutosEnvio) >= parseInt(moment().format('MM'))) {
            return;
          }
          else {
            alert("Por favor ingrese una hora posterior a la actual");
            this.validacionErronea = true;
          }
        }
      }
      return;
    }
  }

  validarDatos() {
    if (this.datosCompartidos.direccion == "" || this.datosCompartidos.numeroDireccion == "" || this.datosCompartidos.ciudad == "" || this.datosCompartidos.ciudad == "Ciudad") {
      this.validacionErronea = true;
      console.log("Error direccion");
    }

    if (this.datosCompartidos.fechaSeleccionada) {
      if (this.datosCompartidos.fecha == "" || this.datosCompartidos.horaEnvio == "" || this.datosCompartidos.minutosEnvio == "") {
        this.validacionErronea = true;
        console.log("Error fecha");
      }
    }

    if (this.datosCompartidos.metodoPagoVisa) {
      if (this.datosCompartidos.numeroTarjeta == "" || this.datosCompartidos.nombreTarjeta == "" || this.datosCompartidos.cvTarjeta == "" || this.datosCompartidos.vencimientoTarjeta == "") {
        this.validacionErronea = true;
        console.log("Error visa");
      }
    } else {
      if (this.datosCompartidos.montoApagar == "" || this.datosCompartidos.vuelto == "") {
        this.validacionErronea = true;
        console.log("Error efect");
      }
    }
  }

  openModal() {

  }


  confirmar() {
    this.validacionErronea = false;
    this.actualizarFecha();
    this.validarHora();
    this.validarDatos();
    console.log(this.datosCompartidos);
    if (this.validacionErronea) {
      alert("Faltan datos por cargar");
    } else {
      this.resumen = "Direccion: " + this.datosCompartidos.direccion + "<br>Numero direccion: " + this.datosCompartidos.numeroDireccion + "<br>" +
        "Ciudad: " + this.datosCompartidos.ciudad + "<br>" + "Referencia: " + this.datosCompartidos.referenciaOpcional + "<hr>";
      if (this.datosCompartidos.metodoPagoVisa) {
        this.resumen = this.resumen + "Nombre titular: " + this.datosCompartidos.nombreTarjeta + "<br>" + "Numero tarjeta: " + this.datosCompartidos.numeroTarjeta + "<br>" +
          "Vencimiento: " + this.datosCompartidos.vencimientoTarjeta + "<br>" + "CV: " + this.datosCompartidos.cvTarjeta + "<hr>";
      } else {
        this.resumen = this.resumen + "Monto a Pagar: " + this.datosCompartidos.montoApagar + "<br>" + "Vuelto: " + this.datosCompartidos.vuelto + "<hr>";
      }

      if (this.datosCompartidos.fechaSeleccionada) {
        this.resumen = this.resumen + "Fecha: " + this.datosCompartidos.fecha + "<br>" + "Hora: " + this.datosCompartidos.horaEnvio + ":" + this.datosCompartidos.minutosEnvio;
      } else {
        this.resumen = this.resumen + "Enviar lo antes posible";
      }

      (document.getElementById("divModal") as HTMLDivElement).innerHTML = this.resumen;

      (document.getElementById("btnModal") as HTMLButtonElement).click();
    }

  }


}
