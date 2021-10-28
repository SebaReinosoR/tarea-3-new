import { Component, OnInit } from '@angular/core';
import {listaNoticia,Noticias} from '../../interfaces/noticias';
import {ActivatedRoute,Route} from '@angular/router';
import {Categoria,listaCategorias} from '../../interfaces/categoria'

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent implements OnInit {
  listaNoticias=listaNoticia;
  Noticias:any;
  id:number=0;
  categoria:any;
  constructor(private ruta:ActivatedRoute) {

    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
   }

  ngOnInit(): void {
    this.Noticias=listaNoticia.find(objeto=>objeto.id==this.id);

    this.categoria=listaCategorias.find(objeto=>objeto.id==this.Noticias.idCategoria)

  }

}
