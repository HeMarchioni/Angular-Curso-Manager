import {Component, OnInit} from "@angular/core";
import {Course} from "./course";
import {CourseService} from "./course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{  // OnInit componente ira aparecer realiza uma função

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  private _filterBy:String;


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {        // Função a ser realizada na hora que é carregado OnInit
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }


  get filter(): String {
    return this._filterBy;
  }

  set filter(value: String) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
}
