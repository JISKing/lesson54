import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlphabeticalPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule // Добавлен импорт CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

