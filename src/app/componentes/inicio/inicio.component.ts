import { Component, OnInit } from '@angular/core';
import{listaNoticia} from '../../interfaces/noticias';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  listaNoticias=listaNoticia;
  constructor() { }

  ngOnInit(): void {
  }

}
