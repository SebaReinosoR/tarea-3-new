import { ArrayType } from "@angular/compiler";

export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    img:string;
    text:string;
}


export let listaNoticia:Array<Noticias>=[

{
    id:1,
    idCategoria:1 ,
    titulo:"Fantasilandia",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    img:"img 1 deben ir en el assets",
    text: "texto de la noticia 1"
},
{
    id:2,
    idCategoria:2,
    titulo:"Nuevo dia libre",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    img:"img 2 deben ir en el assets",
    text: "texto de la noticia 2"
},
{
    id:3,
    idCategoria:3,
    titulo:"Nuevo Clasico",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    img:"img 3 deben ir en el assets",
    text: "texto de la noticia 3"
}
];