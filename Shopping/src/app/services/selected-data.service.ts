import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {
  categorySelected = new BehaviorSubject<any>('Computer');
  cartData :any =[];
  cartCount= new BehaviorSubject<any>(0);
  cartProductDetails = new BehaviorSubject<any>("");

  constructor() { }

  setSelectedCategory(value: string) {
    this.categorySelected.next(value);
  }

  getSelecteddCategory() {
    return this.categorySelected.asObservable();
  }

  addProductToCart(value:any){
    this.cartData.push(value);
    this.cartProductDetails.next(this.cartData);
    this.cartCount.next(this.cartData.length);
    
  }

  getCartDetails(){
    return this.cartProductDetails.asObservable();
  }

  getCartCount(){
    return this.cartCount.asObservable();
  }




}
