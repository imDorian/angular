import { Product } from './../../shared/models/product.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {
  postNewProduct!: FormGroup
  isSubmit:boolean=false
  id:string =""
  noDisplay:string="d-none"


  constructor( private formBuilder:FormBuilder, private productsService: ProductsService, private router: Router) { }


  ngOnInit(): void {
      this.id = this.productsService.product.id
      this.postNewProduct = this.formBuilder.group({
      name:[this.productsService.product.name, [Validators.required]],
      description:[this.productsService.product.description, [Validators.required]],
      image:[this.productsService.product.image, [Validators.required]],
      price:[this.productsService.product.price, [Validators.required]],
      stars:[this.productsService.product.stars]
    })
    this.productsService.product.id = '';
    this.productsService.product.name = '';
    this.productsService.product.price = '';
    this.productsService.product.description = '';
    this.productsService.product.stars = undefined;
    this.productsService.product.image = '';

  }



  submit(){
    this.isSubmit=true
    // console.log(this.postNewProduct.value)
    if(this.postNewProduct.valid)
    if(this.id === ""){
      this.productsService.postNewProduct(this.postNewProduct.value).subscribe()
    }
    else{

      const editProduct: Product ={
        id: this.id,
        name: this.postNewProduct.get("name")?.value,
        description: this.postNewProduct.get("description")?.value,
        image: this.postNewProduct.get("image")?.value,
        price: this.postNewProduct.get("price")?.value,
        stars: this.postNewProduct.get("stars")?.value,
      }

      this.productsService.editProduct(editProduct).subscribe()
      this.id = '';

    }

      // this.productsService.getProduct().subscribe((res2:any)=>{
      //     console.log(res2)
      //   })



      this.productsService.resetProduct()
      this.isSubmit=false
      this.router.navigate(['/products'])
  }




}
