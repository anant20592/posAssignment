import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  
  private priceDetailSource = new BehaviorSubject([]);
  currentPriceList = this.priceDetailSource.asObservable();

    constructor() { }

  updatePriceList(list : any){
    this.priceDetailSource.next(list);
  }
}
