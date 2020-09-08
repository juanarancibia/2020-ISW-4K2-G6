import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.css']
})
export class FormularioDireccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}

