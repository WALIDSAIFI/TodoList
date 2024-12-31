import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskFormComponent} from "./task/task-form/task-form.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {CategoryFormUpdateComponent} from "./category/category-form-update/category-form-update.component";
import {TaskListComponent} from "./task/task-list/task-list.component";
import {TaskFormUpdateComponent} from "./task/task-form-update/task-form-update.component";
import { StatisticsComponent } from './statistics/statistics.component';




const routes: Routes = [
  { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  { path : "categoryform" , component: CategoryFormComponent }, 
  { path :"categoryList" , component: CategoryListComponent },
  { path: 'category/edit/:id', component: CategoryFormUpdateComponent },
  { path: 'taskform', component: TaskFormComponent },
  { path: 'taskList', component: TaskListComponent },
  { path: 'task/edit/:id', component: TaskFormUpdateComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
