import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../entities/product";
import { ProductDataService } from "../infrastructure/product.data.service";


@Injectable({ providedIn: "root" })
export class ViewFacade {

  private productListSubject = new BehaviorSubject<Product[]>([]);
  productList$: Observable<Product[]>;

  constructor(private productDataService: ProductDataService) {
    this.productList$ = this.productListSubject.asObservable();
  }

  load(): void {
    this.productDataService.load().subscribe(
      productList => {
        this.productListSubject.next(productList);
      },
      err => {
        console.error("err", err);
      }
    );
  }

}
