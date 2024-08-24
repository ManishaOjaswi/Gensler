import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  subCategoryItemList: any;
  selectedItemList: any;
  selectedSubCategory: string = "Computer";
  constructor(private dataService: SelectedDataService, private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.dataService.getSelecteddCategory().subscribe(res => {  // fetching the state and sub category user has selected
      this.selectedSubCategory = res;
      // making a api call to get products reated to the sub category user has selected
      this.http.get("https://gensler-project-default-rtdb.firebaseio.com/subCategoryList.json")
        .subscribe((res: any) => {
          this.subCategoryItemList = res;
          this.displayItems(this.subCategoryItemList); // once the api data is fetched we are displaying all the products
        });
    })
  }

  displayItems(itemList: any) {
    let selItemList = itemList.filter((value: any) => {
      return value.subCategory == this.selectedSubCategory;
    })
    this.selectedItemList = selItemList[0];
  }

  addToCart(product: any) {
    this.dataService.addProductToCart(product);
  }

}
