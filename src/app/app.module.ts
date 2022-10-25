import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { DetailsProduitsComponent } from './page/details-produits/details-produits.component';
import { ProductsService } from './core/services/products.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthentificationComponent } from './page/authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailsProduitsComponent,
    AuthentificationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
