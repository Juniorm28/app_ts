import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { TituloComponent } from './componenets/layouts/main/content/titulo/titulo.component';
import { GameListComponent } from './componenets/game/game-list/game-list.component';
import { GamesService } from './services/games.service';
import { GameFormComponent } from './componenets/game/game-form/game-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CopyrightComponent,
    TituloComponent,
    GameListComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
