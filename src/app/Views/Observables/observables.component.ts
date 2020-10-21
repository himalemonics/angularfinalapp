import { Component } from "@angular/core";
import { ObservablesService } from "../../CommonServices/observables.service";

@Component({
    selector: "app-observables", 
    templateUrl: "./observables.component.html", 
    styleUrls: [ "./observables.component.css" ]
})

export class ObservablesComponent {
    title: string;
    items: Array<String>;

    constructor(private _observablesService: ObservablesService) {
        this.title = "Observables";
    }

    search(term: any) {
        this._observablesService.searchService(term).then(items => this.items = items);
    }
}