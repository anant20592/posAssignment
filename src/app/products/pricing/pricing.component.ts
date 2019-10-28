import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProductDetailsService } from 'src/app/shared/product-details.service.js';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  showModal = false;
  showEmptyList: boolean = true;
  productDetails: any = [];
  subTotal: number = 0;
  totalItems: number;
  vatInput : any ;
  discount : any; 
  netTotal : any;
  public now: Date = new Date();
  @ViewChild('btnClose') btnClose : ElementRef
  
  constructor(private productDetailService: ProductDetailsService) { }
  
  ngOnInit() {
    this.productDetailService.currentPriceList.subscribe((product: any) => {
      this.showEmptyList = true;
      if (!(Object.keys(product).length === 0)) {
        this.showEmptyList = false;
      }
      this.productDetails = product;
      this.calculateSubTotal(this.productDetails);
    })
  }

  incrementQuantity(product) {
    this.productDetails.forEach(productDetail => {
      if (productDetail.name == product.name) {
        ++productDetail.quantity;
        productDetail.total = productDetail.quantity * productDetail.price;
      }
    });
    this.productDetailService.updatePriceList(this.productDetails)
  }
  decrementQuantity(product) {
    this.productDetails.forEach(productDetail => {
      if (productDetail.name == product.name && productDetail.quantity > 0) {
        --productDetail.quantity;
        productDetail.total = productDetail.quantity * productDetail.price;
      }
    });
    this.productDetailService.updatePriceList(this.productDetails)
  }
  calculateSubTotal(productDetails) {
    let total = 0;
    let quantity = 0;
    productDetails.forEach(productDetail => {
      total = total + productDetail.total;
      quantity = quantity + productDetail.quantity;
    });
    this.totalItems = quantity;
    this.subTotal = total;
  }


  removeFromCart(index) {
    this.productDetails.splice(index, 1);
    this.productDetailService.updatePriceList(this.productDetails);
  }
  reset() {
    this.productDetails = [];
    this.netTotal ='';
    this.vatInput = '';
    this.discount = ''
    this.productDetailService.updatePriceList(this.productDetails);
  }

  calculateNetTotal(){
    if(this.subTotal && this.vatInput && this.discount){
      let netVat =  (this.subTotal * this.vatInput) / 100;
      let netDiscount =  (this.subTotal * this.discount) / 100;
      let netTotal = this.subTotal + netVat + netDiscount;
      this.netTotal = netTotal;
    }else{
      this.netTotal = '';
    }
  }
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

}
