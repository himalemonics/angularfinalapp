import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";
import { Product } from "../../Model/product.model";

@Component({
    selector: "app-product", 
    templateUrl: "./product.component.html", 
    styleUrls: [ "./product.component.css" ]
})

export class ProductComponent implements OnChanges {
    title: string = "Product Component";
    @Input() product: Product;
    @Input() message: string;

    allMsgChangeLogs: string[] = [];
    allProductChangeLogs: string[] = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        for(let propName in changes) {
            let change = changes[propName];

            let curVal = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);

            let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

            if(propName === 'message') {
                this.allMsgChangeLogs.push(changeLog);
            } else if(propName === 'product') {
                this.allProductChangeLogs.push(changeLog);
            }
        }
    }
}