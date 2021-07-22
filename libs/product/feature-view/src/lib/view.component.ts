import { Component, OnInit } from "@angular/core";
import { Product, ViewFacade } from "@frontend/product/domain";
import { Observable } from "rxjs";

@Component({
  selector   : "product-view",
  templateUrl: "./view.component.html",
  styleUrls  : [ "./view.component.scss" ],
})
export class ViewComponent implements OnInit {
  productList$: Observable<Product[]>;

  constructor(private viewFacade: ViewFacade) {
    this.productList$ = this.viewFacade.productList$;
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.viewFacade.load();
  }

}
