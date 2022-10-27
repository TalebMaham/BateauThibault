import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';



@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent implements OnInit {

 listeProduits : Product[] = [] ;
 
 prelisteProduits : Product[] = [] ; 
 postlisteProduits : Product[] = [] ; 

 x : string ="";

 cat1 : Product [] = [] ; 
 cat2 : Product [] = [] ; 
 cat3: Product [] = [] ; 
 
totale : number = 0; 



  constructor(private productService : ProductsService) {
  

   }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts()
  {
    this.productService.getProductsFromJson().subscribe((res : Product[]) =>{

      this.listeProduits = res ; 
      this.cat1 = this.getCat(0);  
      this.cat2 = this.getCat(1);  
      this.cat3 = this.getCat(2);  
    
    },
    (err) => {
      alert('failed loading json data');
    });
  }



  getCat( cat : number) : Product []
  {
    
    let catList: Product [] = [] ; 

    for (let i = 0; i < 15; i++) {
      if(this.listeProduits[i].category == cat )
      {
          catList.push(this.listeProduits[i]);
      }  

    }
      return catList; 
  }


  add( product : Product)
  {
  

 
    product.quantity_stock ++ ; 

  }

  sub( product : Product)
  {
    
    product.quantity_stock -- ; 

  }

  addPromotion( product : Product)
  {
    
    product.quantity_sold ++ ; 

  }

  subPromotion( product : Product)
  {
    
    product.quantity_sold -- ; 

  }


  modifier(product : Product)
  {

  }


  vendre()
  {
    console.log("Vendu"); 
  }



  
}
