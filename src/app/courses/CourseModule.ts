import { NgModule } from '@angular/core';
import {CourseListComponent} from "./course-list.component";
import {RouterModule} from "@angular/router";
import {CourseInfoComponent} from "./course-info.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {StarModule} from "../shared/component/star/star.module";
import {AppPipeModule} from "../shared/pipe/app-pipe-module";



@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,

    ], imports: [
        CommonModule,    // -> modulo nativo do angular
        FormsModule,
        StarModule,     // -> importanto outro modulo
        AppPipeModule,
        RouterModule.forChild([             // -> forChild pq é um filho app.module
            {
                path: 'courses',component: CourseListComponent
            },
            {
                path: 'courses/info/:id',component: CourseInfoComponent
            },
        ])


    ]

})
export class CourseModule {   // --> classe para segregação de modulos por componente


}