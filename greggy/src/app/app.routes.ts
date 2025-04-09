import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { MiscComponent } from './misc/misc.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent 
    },
    {
        path: 'products', component: CatalogueComponent
    },
    {
        path: 'product/:id', component: ProductComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'details', component: MiscComponent
    },
    {
        path: 'contact-us', component: ContactComponent
    },
    {
        path: 'about-us', component: AboutComponent
    }
];
