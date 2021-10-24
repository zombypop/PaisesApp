import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CountriesResponse } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button { margin-right : 5px}`
  ]
})
export class PorRegionComponent implements OnInit {


  public regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = "";

  paises: CountriesResponse[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if(region === this.regionActiva) return;
    this.regionActiva = region;

    this.paisesService.buscarPorRegion(region).subscribe(
      paises => this.paises = paises as CountriesResponse[]
    );
  }

  getClassCss(region: string): string {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

}
