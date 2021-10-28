import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/interfaces/imagem';


@Component({
  selector: 'app-pagina-generica',
  templateUrl: './pagina-generica.component.html',
  styleUrls: ['./pagina-generica.component.css']
})
export class PaginaGenericaComponent implements OnInit {

  imgsMockadas: Imagem[] = [
    {
      imagemSrc: "https://www.pontofrio-imagens.com.br/html/conteudo-produto/1/55002767/assets/img/qualidade-4k.jpg",
      titulo: "Titulo One",
      principal: true
    },
    {
      imagemSrc: "https://images3.alphacoders.com/575/thumb-1920-575608.jpg",
      titulo: "Titulo Two",
      principal: true
    },
    {
      imagemSrc: "https://www.lg.com/br/images/TV/features/TV-UHD-UM74-A-04-Quad-Core-Processor-Desktop.jpg",
      titulo: "Titulo Three",
      principal: true
    }
  ] 
  moldeMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    this.moldeMobile = innerWidth < 850;
  }

}
