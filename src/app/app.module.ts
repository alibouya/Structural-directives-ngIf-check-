import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesChangesComponent } from './themes-changes/themes-changes.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { IfComponent } from './if/if.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { ShowParagraphComponent } from './show-paragraph/show-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesChangesComponent,
    HighlightDirective,
    RainbowDirective,
    IfComponent,
    NgForExampleComponent,
    ShowParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
