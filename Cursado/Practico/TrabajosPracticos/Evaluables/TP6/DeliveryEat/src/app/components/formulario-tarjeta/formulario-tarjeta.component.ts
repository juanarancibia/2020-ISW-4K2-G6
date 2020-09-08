import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit {

  noEsVisa: boolean = false;


  constructor() { }

  ngOnInit(): void {

  }

  validarTarjeta() {
    let numeroTarjeta = (document.getElementById("cardNumber1") as HTMLInputElement).value + (document.getElementById("cardNumber2") as HTMLInputElement).value + (document.getElementById("cardNumber3") as HTMLInputElement).value + (document.getElementById("cardNumber4") as HTMLInputElement).value
    console.log(numeroTarjeta);
    const visa = new RegExp('^4[0-9]{0,}$');
    numeroTarjeta = numeroTarjeta.replace(/\D/g, '');
    if (!numeroTarjeta.match(visa) || numeroTarjeta.length < 16) {
      this.noEsVisa = true;
    } else {
      this.noEsVisa = false;
    }

  }

  validarLenght(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 4) { (event.target as HTMLInputElement).value = value.slice(0, 4); };
    if (parseInt(value) <= 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }

    switch ((event.target as HTMLInputElement).id) {
      case "cardNumber1":
        if ((event.target as HTMLInputElement).value.length == 4) {
          document.getElementById("cardNumber2").focus();
        }
        break;

      case "cardNumber2":
        if ((event.target as HTMLInputElement).value.length == 4) {
          document.getElementById("cardNumber3").focus();
        }
        break;
      case "cardNumber3":
        if ((event.target as HTMLInputElement).value.length == 4) {
          document.getElementById("cardNumber4").focus();
        }
        break;
    }
  }

  validarLenghtFecha(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 2) { (event.target as HTMLInputElement).value = value.slice(0, 2); };
    if (parseInt(value) > 12 && value.length < 3) { (event.target as HTMLInputElement).value = value.slice(0, 1); };
    if (parseInt(value) <= 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }
  }

  validarLenghtCV(event) {
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 3) { (event.target as HTMLInputElement).value = value.slice(0, 3); };
    if (parseInt(value) <= 0) { (event.target as HTMLInputElement).value = value.slice(0, 0); };
    if (!value.match(/[0-9]/)) {
      (event.target as HTMLInputElement).value = value.slice(0, 0);
    }
  }
}
