import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() products:any[]=[]

  constructor(private router: Router, private productsService: ProductsService ) { }

  ngOnInit(): void {
  this.productsService.getProduct().subscribe((res:any)=>{
    this.products = res
  })

  }

  goToEdit(id:number){
    this.productsService.getProductID(id).subscribe((res: any) => {
      this.productsService.product = res;
      console.log(res)
      this.router.navigate(["/gestion"])
    });

  }

  deleteProduct(id:number){
    this.productsService.deleteProduct(id).subscribe((res:any)=>{
      this.ngOnInit()
    })
  }



}
