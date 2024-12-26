import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-form-update',
  templateUrl: './category-form-update.component.html',
  styleUrls: ['./category-form-update.component.css']
})
export class CategoryFormUpdateComponent implements OnInit {
  category: Category = { id: 0, name: '' };

  constructor(
    private categoryService: CategoryService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    const categories = this.categoryService.getCategories();
    const existingCategory = categories.find(cat => cat.id === categoryId);
    
    if (existingCategory) {
      this.category = { ...existingCategory };
    } else {
      this.router.navigate(['/categoryList']);
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      const success = this.categoryService.updateCategory(this.category);
      if (success) {
        window.alert('Category updated successfully!');
        this.router.navigate(['/categoryList']);
      } else {
        window.alert('Error: Category with this name already exists!');
      }
    }
  }
}
