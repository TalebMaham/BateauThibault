import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProduitsComponent } from './page/details-produits/details-produits.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'details-produits', component : DetailsProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
