import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-reactiveform", 
    templateUrl: "./reactiveform.component.html", 
    styleUrls: [ "./reactiveform.component.css" ]
})

export class ReactiveFormComponent {
    title: string;
    rctFrm: FormGroup;

    constructor(fb: FormBuilder) {
        this.title = "Reactive Form!";
        this.rctFrm = fb.group({
            fullname: "", 
            emailaddress: "", 
            mobilenumber: "", 
            description: ""
        })
    }

    displayValues(formValues: any) {
        console.log(formValues);
    }
}