import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string="http://localhost:3000/products"
  product:any={
    description:"",
    id:"" ,
    image:"",
    name:"",
    price:"",
    }
    products?: any | undefined =[]
    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

    getProduct(){
     return this.http.get(this.url)
    }

    getProductID(ProductID:number){
      return this.http.get(this.url + "/" + ProductID)
    }

    postNewProduct(newProduct:any){
      return this.http.post(this.url, newProduct)
    }

    editProduct(product:Product){
      return this.http.put(this.url + "/" + product.id, product)

    }

    deleteProduct(productID:number){
      return this.http.delete(this.url + "/" + productID)
    }

    resetProduct(){
      this.product.name = ""
      this.product.description = ""
      this.product.image = ""
      this.product.price = ""
      this.product.id = ""
    }
  }
