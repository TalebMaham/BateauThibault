import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent implements OnInit {

 listeProduits : Product[] = [] ; 

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts()
  {
    this.productService.getProductsFromJson().subscribe((res : Product[]) =>{

      this.listeProduits = res ; 
      console.log(res); 
    
    },
    (err) => {
      alert('failed loading json data');
    });
  }
  
}
