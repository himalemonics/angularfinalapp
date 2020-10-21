import { Component } from "@angular/core";

@Component({
    selector: "app-pipes", 
    templateUrl: "./pipes.component.html", 
    styleUrls: [ "./pipes.component.css" ]
})

export class PipesComponent {
    title: string;
    techList: string[] = ["jAva", "seLenIum", "jaVasCriPt", "pHp"];
    strLine: string = "anGulaRjs is a jAvaScript frAmewOrk!";
    date: Date = new Date();
    rating: number = 3;
    grading: number = 65.62;

    constructor() {
        this.title = "Pipes";
    }
}