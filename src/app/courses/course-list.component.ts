import {Component, OnInit} from "@angular/core";
import {Course} from "./course";
import {CourseService} from "./course.service";

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{  // OnInit componente ira aparecer realiza uma função

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  private _filterBy:String;


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {        // Função a ser realizada na hora que é carregado OnInit
    this.retrieveAll();

  }


  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next:course => {
        this._courses = course;
        this.filteredCourses = this._courses;
      },
      error: err => {
        console.log("Error",err)
      }
    })

  }



  get filter(): String {
    return this._filterBy;
  }

  set filter(value: String) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
}
