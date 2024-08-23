import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {
  showBody: boolean = false;
  catogories: any = [];


  constructor(private http: HttpClient, private selectedData: SelectedDataService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get("https://gensler-project-default-rtdb.firebaseio.com/categories.json")
      .subscribe((res: any) => {
        let catogoriesValue = res;

        this.catogories =
          catogoriesValue.map((item: any) => {
            return {
              ...item,
              showSubCategories: false,
            }
         });
        console.log("this.catogories==", this.catogories);
      });

  }


  toggle(category: any, i: number) {
    this.catogories.forEach((item: any) => {
      if (item.title === category.title) {
        item.showSubCategories = !item.showSubCategories;
      } else {
        item.showSubCategories = false;
      }
    })
  }

  subCategorySelect(categorySelected:string){
    console.log("categorySelected==",categorySelected);
    this.selectedData.setSelectedCategory(categorySelected);
  }

}
