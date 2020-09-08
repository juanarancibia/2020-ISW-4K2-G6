import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {
  private numeroTarjeta = new BehaviorSubject<string>("");
  currentNumeroTarjeta = this.numeroTarjeta.asObservable();

  private nombreTarjeta = new BehaviorSubject<string>("");
  currentNombreTarjeta = this.nombreTarjeta.asObservable();

  private CVTarjeta = new BehaviorSubject<string>("");
  currentCVTarjeta = this.CVTarjeta.asObservable();

  private vencTarjeta = new BehaviorSubject<string>("");
  currentVencTarjeta = this.vencTarjeta.asObservable();


  constructor() { }

  cambiarNumeroTarjeta(message: string) {
    this.numeroTarjeta.next(message);
  }
  cambiarNombreTarjeta(message: string) {
    this.nombreTarjeta.next(message);
  }
  cambiarCVTarjeta(message: string) {
    this.CVTarjeta.next(message);
  }
  cambiarVencTarjeta(message: string) {
    this.vencTarjeta.next(message);
  }
}
