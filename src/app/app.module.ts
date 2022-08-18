import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/_services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, Ng2SearchPipeModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
