import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DatosCompartidos } from 'src/app/models/datosCompartidos';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  private datosCompartidos = new BehaviorSubject<DatosCompartidos>(new DatosCompartidos());
  currentDatosCompartidos = this.datosCompartidos.asObservable();
  constructor() {

  }

  cambiarDatosCompartidos(datosCompartidos: DatosCompartidos) {
    this.datosCompartidos.next(datosCompartidos);
  }
}
