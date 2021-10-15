import { Component, Input, OnInit } from '@angular/core';
import { Cachorro } from '../../interfaces/cachorro';

@Component({
  selector: 'app-card-pagina',
  templateUrl: './card-pagina.component.html',
  styleUrls: ['./card-pagina.component.css']
})
export class CardPaginaComponent implements OnInit {

  @Input() cachorro?: Cachorro;

  constructor() { }

  ngOnInit(): void {
  }

}
