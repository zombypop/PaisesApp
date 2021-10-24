import { Component, OnInit } from '@angular/core';
import { CountriesResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  pais: string = '';
  errores: boolean = false;
  paises: CountriesResponse[] = [];

  constructor(private paisesServ: PaisesService) { }
  ngOnInit(): void {

  }


  buscar(termino: string) {
    this.errores = false;
    this.pais = termino;
    this.paisesServ.buscarCapital(termino)
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
