import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesChangesComponent } from './themes-changes/themes-changes.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemesChangesComponent,
    HighlightDirective,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
