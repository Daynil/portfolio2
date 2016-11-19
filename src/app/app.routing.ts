import { Routes, RouterModule } from '@angular/router';

/** Routes */
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { CcawComponent } from './projects/ccaw/ccaw.component';
import { ShelleyComponent } from './projects/shelley/shelley.component';
import { ThisAppComponent } from './projects/this-app/this-app.component';


export const appRoutes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'about-me',  component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact',   component: ContactComponent },

  { path: 'ccaw',      component: CcawComponent },
  { path: 'shelley',   component: ShelleyComponent },
  { path: 'this-app',  component: ThisAppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
