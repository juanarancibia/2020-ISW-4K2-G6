import { Component, OnInit } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'

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
    let date = moment();
    this.fechaDesde = { year: date.year(), month: date.month(), day: date.day() };
    date.add(30, "days");
    this.diaHasta = date.day();
    this.mesHasta = date.month();
    this.añoHasta = date.year();
    this.fechaHasta = { year: this.añoHasta, month: this.mesHasta, day: this.diaHasta };
    console.log(this.fechaDesde);
    console.log(this.fechaHasta);
  }


}
