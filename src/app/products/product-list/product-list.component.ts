import { Component, OnInit } from '@angular/core';
import productsData from '../../../assets/pos.products.json';
import { ProductDetailsService } from 'src/app/shared/product-details.service.js';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = productsData;
  priceList: any = [];
  constructor(private productDetailService: ProductDetailsService) { }
  ngOnInit() {
  }

  addToList(product) {
    let flag = false;
    if (this.priceList.length > 0) {
      this.priceList.forEach(existingProduct => {
        if (existingProduct.name == product.name) {
          flag = true;
          ++existingProduct.quantity;
          existingProduct.total = existingProduct.quantity * existingProduct.price;
        }
      });
      if (!flag) {
        product.quantity = 1;
        product.total = product.quantity * product.price;
        this.priceList.push(product);
      }
    } else {
      product.quantity = 1;
      product.total = product.quantity * product.price;
      this.priceList.push(product);
    }
    this.productDetailService.updatePriceList(this.priceList)
  }
}
