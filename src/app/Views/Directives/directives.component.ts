import { Component } from "@angular/core";

@Component({
    selector: "app-directives", 
    templateUrl: "./directives.component.html", 
    styleUrls: [ "./directives.component.css" ]
})

export class DirectivesComponent {
    title: string;
    people1: any[] = [
        { name: "douglas", age: 32 }, 
        { name: "sinter", age: 42 }, 
        { name: "mcdeolds", age: 34 }, 
        { name: "warner", age: 23 }, 
        { name: "auguirre", age: 26 } 
    ];

    peopleByCategory2: any[] = [
        { 
            category: "designer", 
            people2: [
                { name: "sinter", age: 42 }, 
                { name: "mcdeolds", age: 34 }
            ]
        }, 
        { 
            category: "developer", 
            people2: [
                { name: "warner", age: 23 }, 
                { name: "auguirre", age: 26 }, 
                { name: "mcdeolds", age: 34 }
            ]
        }
    ];

    people3: any[] = [
        { name: "douglas", age: 32 }, 
        { name: "sinter", age: 42 }, 
        { name: "mcdeolds", age: 34 }, 
        { name: "warner", age: 23 }, 
        { name: "auguirre", age: 26 } 
    ];

    people4: any[] = [
        { name: "douglas", age: 32, country: "usa" }, 
        { name: "sinter", age: 42, country: "uae" }, 
        { name: "mcdeolds", age: 34, country: "usa" }, 
        { name: "warner", age: 23, country: "uk" }, 
        { name: "auguirre", age: 26, country: "bahrain" } 
    ];

    constructor() {
        this.title = "Directives";
    }
}