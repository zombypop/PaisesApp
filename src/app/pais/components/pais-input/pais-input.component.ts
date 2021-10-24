import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEntrar: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  pais: string = '';
  capital: string = '';

  @Input() inPlaceholder = '';

  debouncer: Subject<string> = new Subject();

  constructor() { }
  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(399)
      )
      .subscribe(valor => {
        // console.log('Debouncer', valor);
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    console.log(this.pais);
    this.onEntrar.emit(this.pais);

  }

  teclaPresionada() {
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.pais);
    this.debouncer.next(this.pais);
  }

}
