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
    color:"green"
},
{
    id:2,
    titulo:"Mundo",
    color:"blue"
},
{
    id:3,
    titulo:"Deporte",
    color:"reddark"
},
{
    id:4,
    titulo:"Economía",
    color:"violet"
},
{
    id:5,
    titulo:"Salud",
    color:"bluedark"
},
{
    id:6,
    titulo:"Tecnólogia",
    color:"red"
}


];