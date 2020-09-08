import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

  validarTarjeta(event){
    let numeroTarjeta = (event.target as HTMLInputElement).value;

    const visa = new RegExp('^4[0-9]{0,}$');
    numeroTarjeta = numeroTarjeta.replace(/\D/g, '');
    if (numeroTarjeta.match(visa)){
      console.log("es visa");
    }
    console.log("no es visa");
  }

  validarLenght(event){
    let value = (event.target as HTMLInputElement).value;
    if (value.length > 4)
      {(event.target as HTMLInputElement).value = value.slice(0, 4);};

  }

}
