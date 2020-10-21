import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fullnameValidator } from './fullnameValidator';
import { mobilenumberValidator } from './mobilenumberValidator';

@Component({
    selector: "app-reactiveformvalidations", 
    templateUrl: "./reactiveformvalidations.component.html", 
    styleUrls: [ "./reactiveformvalidations.component.css" ]
})

export class ReactiveFormValidationsComponent {
    title: string;
    countries: any[] = ["", "bahrain", "australia", "india", "usa", "uk"];
    rctFrmVlds: FormGroup;

    constructor() {
        this.title = "Reactive Form Validations!";
        this.rctFrmVlds = this.createFormGroup();
    }

    createFormGroup() {
        return new FormGroup({
            fullname: new FormControl("", [ Validators.required, fullnameValidator ]), 
            emailaddress: new FormControl("", [ Validators.required, Validators.email ]), 
            mobilenumber: new FormControl("", [ Validators.required, mobilenumberValidator ]), 
            country: new FormControl("", [ Validators.required ])
        });
    }

    get fullname() {
        return this.rctFrmVlds.get("fullname");
    }

    get emailaddress() {
        return this.rctFrmVlds.get("emailaddress");
    }

    get mobilenumber() {
        return this.rctFrmVlds.get("mobilenumber");
    }

    get country() {
        return this.rctFrmVlds.get("country");
    }

    submitValues() {

    }

}