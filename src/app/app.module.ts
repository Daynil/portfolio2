import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

/** Components */
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

/** Services */
import { TransitionService } from './shared/transition.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutMeComponent,
    PortfolioComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    // Services
    TransitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
