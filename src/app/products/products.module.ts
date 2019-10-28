import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, PricingComponent, ReceiptComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductsModule { }
