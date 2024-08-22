import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {
  categorySelected = new BehaviorSubject<any>('');

  constructor() { }

  setSelectedCategory(value: string) {
    this.categorySelected.next(value);
  }

  getSelecteddCategory() {
    return this.categorySelected.asObservable;
  }

}
