import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  categoryTitle: string ="Category";
  constructor(private selectedData: SelectedDataService) { }


  ngOnInit(): void {
    this.selectedData.getSelecteddCategory().subscribe(res=>{
      this.categoryTitle = res;
      console.log("value to next comp======",this.categoryTitle);
    })
  }


}
