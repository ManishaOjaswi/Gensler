import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  subCategoryItemList:any;
  selectedItemList:any;
  selectedSubCategory: string = "Computer";
  constructor(private dataService: SelectedDataService,private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getSelecteddCategory().subscribe(res => {
      this.selectedSubCategory = res;

      this.http.get("https://gensler-project-default-rtdb.firebaseio.com/subCategoryList.json")
      .subscribe((res: any) => {
        this.subCategoryItemList = res;
        this.displayItems(this.subCategoryItemList);
      });
    })
  }

  displayItems(itemList:any){
    let selItemList = itemList.filter((value:any)=>{
      return value.subCategory == this.selectedSubCategory;
    })
    this.selectedItemList  = selItemList[0];
  }

  addToCart(product:any){
    console.log("product==",product);
    this.dataService.addProductToCart(product);
  }

}
