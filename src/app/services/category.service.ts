import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private storageKey = 'categories';

  constructor(
    private taskService: TaskService
  ) {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
  getCategories(): Category[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addCategory(category: Category): boolean {
    const categories = this.getCategories();
    if (categories.some((cat) => cat.name.toLowerCase() === category.name.toLowerCase())) {
      return false;
    }
   category.id = Date.now();
    categories.push(category);
    localStorage.setItem(this.storageKey, JSON.stringify(categories));
    return true;
  }

  deleteCategory(categoryId: number): void {
    const categories = this.getCategories().filter((cat) => cat.id !== categoryId);
    localStorage.setItem(this.storageKey, JSON.stringify(categories));

    const tasks = this.taskService.getTasks();
    
    const updatedTasks = tasks.filter(task => task.categoryId !== categoryId);
    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  updateCategory(category: Category): boolean {
    const categories = this.getCategories();
    const index = categories.findIndex(cat => cat.id === category.id);

    const nameExists = categories.some(
      cat => cat.id !== category.id && cat.name.toLowerCase() === category.name.toLowerCase()
    );

    if (nameExists) {
      return false;
    }

    if (index !== -1) {
      categories[index] = category;
      localStorage.setItem(this.storageKey, JSON.stringify(categories));
      return true;
    }
    return false;
  }
}