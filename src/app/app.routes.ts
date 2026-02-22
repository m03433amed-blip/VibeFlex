import { Contact } from './contact/contact';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Treindy } from './treindy/treindy';
import { Services } from './services/services';
import { Products } from './products/products';
import { AboutUs } from './about-us/about-us';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'trendly', component: Treindy, title: 'trendly' },
  { path: 'service', component: Services, title: 'service' },
  { path: 'products', component: Products, title: 'products' },
  { path: 'aboutus', component: AboutUs, title: 'aboutus' },
  { path: 'contactus', component: Contact, title: 'contactus' },
  { path: '**', component: NotFoundComponent, title: 'not found' },
];
