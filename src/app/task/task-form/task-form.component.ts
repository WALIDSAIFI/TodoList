import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    status: 'TODO',
    categoryId: 0,
    priority: 'MEDIUM'
  };

  categories: Category[] = [];

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    public router: Router
  ) {
    this.categories = this.categoryService.getCategories();
  }

  onSubmit(form: any) {
    if (form.valid && this.task.categoryId) {
      const wordCount = this.task.description.trim().split(/\s+/).length;
      if (this.task.description.length > 100) {
        window.alert('La description ne doit pas dépasser 100 caractères.');
        return;
      }
      if (wordCount < 5) {
        window.alert('La description doit contenir au moins 5 mots.');
        return;
      }

      const success = this.taskService.addTask(this.task);
      if (success) {
        window.alert('Tâche ajoutée avec succès!');
        this.router.navigate(['/taskList']);
      } else {
        window.alert('Erreur : Une tâche avec ce titre existe déjà');
      }
    } else {
      window.alert('Veuillez remplir tous les champs requis.');
    }
  }
}
