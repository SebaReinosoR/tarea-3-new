import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component'
import {VerMasComponent} from './componentes/ver-mas/ver-mas.component'
import {AtencionClienteComponent} from './componentes/atencion-cliente/atencion-cliente.component'
import { NoticiasComponent } from './componentes/noticias/noticias.component';
const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"verMas/:id",component:VerMasComponent},
  {path: "atencion-cliente",component:AtencionClienteComponent},
  {path:"noticias",component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
