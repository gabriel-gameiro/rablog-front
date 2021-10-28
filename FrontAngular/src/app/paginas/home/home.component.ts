import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { Cachorro } from 'src/app/interfaces/cachorro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataMockada: Cachorro[] = [
    {
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://www.royalpets.com.br/media/petbreed/content/5.png',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },
    {
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://cdn.los-animales.org/fotos/414549052_1891713-filhotes-de-golden.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },
    {
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    },{
      nome: 'Cachorro feliz',
      altura: 2.5,
      raca: 'Golden',
      cor: 'Laranja',
      img: 'https://m.media-amazon.com/images/I/81u95tap2nL._AC_SX425_.jpg',
      descricao: 'Os Goldens são a raça mais feliz dentros os cachorros, verdadeiros amigões.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
