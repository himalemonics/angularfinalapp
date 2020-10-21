import { Component, OnInit } from "@angular/core";
import { Student } from '../../Model/student.model';
import { StudentService } from '../../CommonServices/student.service';

@Component({
    selector: "app-subscribe", 
    templateUrl: "./subscribe.component.html", 
    styleUrls: [ "./subscribe.component.css" ]
})

export class SubscribeComponent {
    title: string;
    students: Student[] = [];

    constructor(private studentService: StudentService) {
        this.title = "Subscribe";
    }

    ngOnInit() {
        const studentsObservable = this.studentService.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData
        })
    }
}