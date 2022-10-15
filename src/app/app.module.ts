import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingModule } from './shopping/shopping.module';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutProductComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    SdaHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
