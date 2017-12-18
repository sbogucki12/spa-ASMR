import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftLinksComponent } from './left-links/left-links.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { RightInfoBoxComponent } from './right-info-box/right-info-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftLinksComponent,
    MainWindowComponent,
    RightInfoBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
