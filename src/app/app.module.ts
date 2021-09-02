import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListComponent} from "./courses/course-list.component";
import {StarComponent} from "./star/star.component";
import {ReplacePipe} from "./pipe/replace.pipe";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./error404/error-404.component";
import {CourseInfoComponent} from "./courses/course-info.component";

@NgModule({
    declarations: [
        AppComponent,
        CourseListComponent,
        StarComponent,
        ReplacePipe,
      NavBarComponent,
      Error404Component,
      CourseInfoComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
    RouterModule.forRoot([    //-> modulo de rotas (forRoot recebe um array de rotas)
      {
        path: 'courses',component: CourseListComponent
      },
      {
        path: 'courses/info/:id',component: CourseInfoComponent
      },
      {
        path:'', redirectTo: 'courses',pathMatch:'full'  //-> Url raiz vai para (/courses)
      },
      {
        path: '**', component: Error404Component     // -> se Url for uma rota que nao existe chama o componente Erro404
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
