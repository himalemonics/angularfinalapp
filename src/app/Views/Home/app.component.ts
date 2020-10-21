import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../../Model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangapp';

  product = new Product("samsung", 5000);
  msg: string = "Hello! ngOnChanges";

  onFormSubmit(productForm: NgForm) {
    let name = productForm.controls["name"].value;
    let price = productForm.controls["price"].value;
    
    this.product = new Product(name, price);
  }

}
