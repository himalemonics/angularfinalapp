import { Component } from "@angular/core";

@Component({
    selector: "app-aboutus", 
    templateUrl: "./aboutus.component.html", 
    styleUrls: [ "./aboutus.component.css" ]
})

export class AboutUsComponent {
    title: string;

    constructor() {
        this.title = "About Us";
    }
}