import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VerMasComponent } from './componentes/ver-mas/ver-mas.component';
import { AtencionClienteComponent } from './componentes/atencion-cliente/atencion-cliente.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VerMasComponent,
    AtencionClienteComponent,
    FooterComponent,
    HeaderComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
