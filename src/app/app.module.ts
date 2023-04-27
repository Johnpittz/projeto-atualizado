import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartilhamento/navbar/navbar.component';
import { CriarComponent } from './paginas/criar/criar.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { ExcluirComponent } from './paginas/excluir/excluir.component';
import { NavbarModule } from './compartilhamento/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CriarComponent,
    EditarComponent,
    ExcluirComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
