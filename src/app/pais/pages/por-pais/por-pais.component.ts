import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CountriesResponse } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {


  pais: string = '';
  errores: boolean = false;
  paises: CountriesResponse[] = [];

  constructor(private paisesServ: PaisesService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.errores = false;
    this.pais = termino;
    this.paisesServ.buscarpais(termino)
      .subscribe((resp) => {
        if (resp.status != 404) {
          this.paises = resp as CountriesResponse[];
        } else {
          this.paises = [];
          this.errores = true;
        }
      }, (err) => {
        console.log(err);
        this.errores = true;
        this.paises = [];
      }, () => { console.log("Listo") }
      );
  }

  sugerencias(event: any) {
    this.errores = false; 
  }

}