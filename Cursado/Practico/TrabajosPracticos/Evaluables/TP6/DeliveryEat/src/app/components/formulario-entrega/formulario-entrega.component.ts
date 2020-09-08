import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  fecha: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.calcularFechaHasta();
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



}
