import { Injectable } from '@angular/core';
import { Student } from '../Model/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      id: 1, 
      name: "kiran", 
      enrollmentnumber: 75473737, 
      college: "wilson", 
      university: "er"
    }, 
    {
      id: 2, 
      name: "rubsh", 
      enrollmentnumber: 8647323, 
      college: "adamy", 
      university: "iy"
    },
    {
      id: 3, 
      name: "david", 
      enrollmentnumber: 86484352, 
      college: "uneny", 
      university: "iyr"
    },
    {
      id: 4, 
      name: "vid", 
      enrollmentnumber: 73626352, 
      college: "gf uneny", 
      university: "ihg r"
    }
  ]
  
  constructor() { }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000)
    });
    return studentsObservable;
  }
}
