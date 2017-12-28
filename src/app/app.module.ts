import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftLinksComponent } from './left-links/left-links.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { RightInfoBoxComponent } from './right-info-box/right-info-box.component';
import { AsmrRequestsComponent } from './asmr-requests/asmr-requests.component';
import { AsmrRequestsVideo1Component } from './asmr-requests-video1/asmr-requests-video1.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsmrrequestsWaterComponent } from './asmrrequests-water/asmrrequests-water.component';
import { AsmrrequestsdepartureComponent } from './asmrrequestsdeparture/asmrrequestsdeparture.component';
import { AsmrrequestserasureComponent } from './asmrrequestserasure/asmrrequestserasure.component';
import { AsmrrequestscranialComponent } from './asmrrequestscranial/asmrrequestscranial.component';
import { AboutasmrComponent } from './aboutasmr/aboutasmr.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},  
  { path: 'asmrrequestsvideos', component: AsmrRequestsVideo1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftLinksComponent,
    MainWindowComponent,
    RightInfoBoxComponent,
    AsmrRequestsComponent,
    AsmrRequestsVideo1Component,
    HomeComponent,
    AsmrrequestsWaterComponent,
    AsmrrequestsdepartureComponent,
    AsmrrequestserasureComponent,
    AsmrrequestscranialComponent,
    AboutasmrComponent, 
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
