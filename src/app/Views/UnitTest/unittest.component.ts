import { Component } from "@angular/core";

@Component({
    selector: "app-unittest", 
    templateUrl: "./unittest.component.html", 
    styleUrls: [ "./unittest.component.css" ]
})

export class UnitTestComponent {
    title: string;

    constructor() {
        this.title = "Unit Test";
    }
}