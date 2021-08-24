import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Course} from "./course";
import {CourseService} from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { // Constructor injeção de dependência
  }

  ngOnInit(): void {
    // @ts-ignore           // -> ignorar o fato de poder ser nulo (na execução)
    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
  }                                                 // retorna o ID que esta na rota


  save():void{
    this.courseService.save(this.course);
  }



}
