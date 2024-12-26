import { Component } from '@angular/core';
import {Category} from "../../models/category.model";
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  category: Category = { id: 0, name: '' };

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      const success = this.categoryService.addCategory(this.category);
      if (success) {
        window.alert('Category added successfully!');
        this.router.navigate(['/categoryList']);
        this.category = { id: 0, name: '' };
      } else {
        window.alert('Error: Category with this name already exists!');
      }
    }
  }
}
