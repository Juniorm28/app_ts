import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { TituloComponent } from './componenets/layouts/main/content/titulo/titulo.component';
import { GameListComponent } from './componenets/game/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CopyrightComponent,
    TituloComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
