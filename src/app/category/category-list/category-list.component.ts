// src/app/components/category/category-list/category-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    public router: Router
  ) {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  deleteCategory(categoryId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.categoryService.deleteCategory(categoryId);
      this.loadCategories();
    }
  }
}
