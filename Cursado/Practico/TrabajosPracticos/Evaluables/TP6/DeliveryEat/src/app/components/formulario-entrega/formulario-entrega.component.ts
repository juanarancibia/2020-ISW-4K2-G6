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

  constructor() { }

  ngOnInit(): void {
    this.calcularFechaHasta();
  }

  calcularFechaHasta() {

    let fechaActual = moment();
    let fechaActualFormato = (fechaActual.format('L'));
    let fechaHasta = (fechaActual.add(30, "days")).format('L');
    let fechaActualEnPartes:string[] = fechaActualFormato.split("/");
    let fechaHastaEnPartes:string[] = fechaHasta.split("/");

    this.fechaDesde = { year: parseInt(fechaActualEnPartes[2]), month: parseInt(fechaActualEnPartes[0]), day: parseInt(fechaActualEnPartes[1]) };
    this.fechaHasta = { year: parseInt(fechaHastaEnPartes[2]), month: parseInt(fechaHastaEnPartes[0]), day: parseInt(fechaHastaEnPartes[1]) };
  }



}
