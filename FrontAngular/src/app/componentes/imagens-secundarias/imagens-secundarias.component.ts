import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { Imagem } from 'src/app/interfaces/imagem';

@Component({
  selector: 'app-imagens-secundarias',
  templateUrl: './imagens-secundarias.component.html',
  styleUrls: ['./imagens-secundarias.component.css']
})

@Injectable()
export class ImagensSecundariasComponent implements OnInit {

  @Input() imagens: Imagem[] = [];
  imagemDaVez?: Imagem;
  posicao: number = 0;

  somar(): void{
    this.posicao++;
    this.imagemDaVez = this.imagens[this.posicao%this.imagens.length];
    console.log(this.imagemDaVez);
  }

  subtrair(): void{
    this.posicao--;
    this.imagemDaVez = this.imagens[this.posicao%this.imagens.length];
    console.log(this.imagemDaVez);
  }

  constructor() { }

  ngOnInit(): void {
    this.imagemDaVez = this.imagens[0];
  }

}
