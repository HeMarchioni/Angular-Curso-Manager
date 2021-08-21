import {Component, OnInit} from "@angular/core";
import {Course} from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{  // OnInit componente ira aparecer realiza uma função

  courses: Course[] = [];

  ngOnInit(): void {        // Função a ser realizada na hora que é carregado OnInit
    this.courses = [
      {
        id: 1,
        name: "Angular: Forms",
        imgUrl: "",
        price: 99.99,
        code: "XPS-8796",
        duration: 120,
        rating: 5.4,
        releaseDate: 'Novembro, 4 , 2019'
      },
      {
        id: 2,
        name: "Angular: HTTP",
        imgUrl: "",
        price: 45.99,
        code: "LKL-8796",
        duration: 80,
        rating: 4,
        releaseDate: 'December, 4 , 2019'
      }

      ]

  }

}
