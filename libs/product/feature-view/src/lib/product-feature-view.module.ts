import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductDomainModule } from "@frontend/product/domain";
import { ViewComponent } from "./view.component";

@NgModule({
  imports     : [ CommonModule, ProductDomainModule ],
  declarations: [ ViewComponent ],
  exports     : [ ViewComponent ],
})
export class ProductFeatureViewModule {}
