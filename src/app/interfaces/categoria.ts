import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";

export interface Categoria {
    id:number;
    titulo:string;
    color:string;
    
}

export let listaCategorias: Array<Categoria>=[
{
    id:1,
    titulo:"Entretenimiento",
    color:"blue"
},
{
    id:2,
    titulo:"Notica",
    color:"red"
},
{
    id:3,
    titulo:"Deporte",
    color:"green"
}

];