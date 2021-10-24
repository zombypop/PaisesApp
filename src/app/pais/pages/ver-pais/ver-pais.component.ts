import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountriesResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: CountriesResponse;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {

    // this.activateRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this.paisesService.buscarPaisPorCodigo(params.id).subscribe(
    //     (x) => console.log(x)
    //   )
    // });
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.paisesService.buscarPaisPorCodigo(id)),
      tap(console.log)
    )
      .subscribe(pais => { this.pais = pais as CountriesResponse });

  }

}
