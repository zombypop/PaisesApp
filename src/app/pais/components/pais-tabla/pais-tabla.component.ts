import { Component, Input, OnInit } from '@angular/core';
import { CountriesResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: CountriesResponse[] = [];

  constructor(private paisesServ: PaisesService) { }

  ngOnInit(): void {
  }


}
