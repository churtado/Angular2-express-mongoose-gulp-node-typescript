import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { D3Service } from 'd3-ng2-service'; // <-- import statement

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HomeComponent }      from './components/home/home.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { CitationsComponent }  from './components/citations/citations.component';

import { CitationService }  from './services/citation.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    CitationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CitationService/*, D3Service*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
