import { ProductsService } from './../../shared/services/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

   allProducts:any[]=[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
   this.productsService.getProduct().subscribe((res:any) => {
   this.allProducts = res
    })
  }

}
