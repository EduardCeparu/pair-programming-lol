import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChampionsComponent } from './components/champions/champions.component';
import { GuidesComponent } from './components/guides/guides.component';
import { GuideBoxComponent } from './components/guide-box/guide-box.component';


const routes:Routes=[
  {path: '', component:ChampionsComponent},
  {path: 'guides/:name', component:GuidesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    GuidesComponent,
    GuideBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
