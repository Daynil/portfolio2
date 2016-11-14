import { Routes, RouterModule } from '@angular/router';

/** Routes */
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


export const appRoutes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'about-me',  component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact',   component: ContactComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
