import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SearchComponent } from './search/search.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    SearchComponent,
    TopHeaderComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SearchComponent, TopNavComponent, TopHeaderComponent]
})
export class AppModule { }
