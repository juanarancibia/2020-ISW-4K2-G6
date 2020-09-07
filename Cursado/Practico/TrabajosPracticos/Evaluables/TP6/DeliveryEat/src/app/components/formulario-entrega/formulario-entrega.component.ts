import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-entrega',
  templateUrl: './formulario-entrega.component.html',
  styleUrls: ['./formulario-entrega.component.css']
})
export class FormularioEntregaComponent implements OnInit {

  añoHasta: number;
  mesHasta: number;
  diaHasta: number;

  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  constructor() { }

  ngOnInit(): void {
    this.calcularFechaHasta();
  }

  calcularFechaHasta(){
    let fechaHasta = new Date();
    fechaHasta.setDate(fechaHasta.getDate() + 30);
    this.diaHasta = fechaHasta.getDay();
    this.mesHasta = fechaHasta.getMonth();
    this.añoHasta = fechaHasta.getFullYear();
  }

  
}
