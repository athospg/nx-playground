import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductFeatureViewModule } from "@frontend/product/feature-view";
import { AppComponent } from "./app.component";


@NgModule({
  declarations: [ AppComponent ],
  imports     : [
    BrowserModule,
    HttpClientModule,
    ProductFeatureViewModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
