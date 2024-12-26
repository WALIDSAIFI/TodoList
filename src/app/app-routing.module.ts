import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskFormComponent} from "./task/task-form/task-form.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";

const routes: Routes = [
  { path : "categoryform" , component: CategoryFormComponent },
  { path :"categoryList" , component: CategoryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
