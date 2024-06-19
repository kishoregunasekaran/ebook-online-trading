// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<any[]>([]);
  items$ = this.items.asObservable();

  addToCart(item: any) {
    const currentItems = this.items.value;
    this.items.next([...currentItems, item]);
  }

  getCartItems() {
    return this.items$;
  }
}
