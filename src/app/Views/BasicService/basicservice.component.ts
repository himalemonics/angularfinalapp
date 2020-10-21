import { Component } from "@angular/core";
import { BasicService } from "../../CommonServices/basicservice.service";

@Component({
    selector: "app-basicservice", 
    templateUrl: "./basicservice.component.html", 
    styleUrls: [ "./basicservice.component.css" ]
})

export class BasicServiceComponent {
    title: string;
    getfullName: string;

    constructor(private _basicService: BasicService) {
        this.title = "Basic Service";
        this.getfullName = this._basicService.fullName();
    }
}