import { Component, OnInit, Input } from '@angular/core';
import { Imagem } from 'src/app/interfaces/imagem';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  @Input() imagem?: Imagem;

  constructor() { }

  ngOnInit(): void {
  }

}
