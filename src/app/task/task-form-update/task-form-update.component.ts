import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-task-form-update',
  templateUrl: './task-form-update.component.html',
  styleUrls: ['./task-form-update.component.css']
})
export class TaskFormUpdateComponent implements OnInit {
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
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit() {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    const tasks = this.taskService.getTasks();
    const existingTask = tasks.find(task => task.id === taskId);
    
    if (existingTask) {
      this.task = { ...existingTask };
      // Convertir la date string en objet Date
      this.task.dueDate = new Date(existingTask.dueDate);
    } else {
      this.router.navigate(['/taskList']);
    }
  }

  onSubmit(form: any) {
    if (form.valid && this.task.categoryId) {
      // Vérifier la description
      const wordCount = this.task.description.trim().split(/\s+/).length;
      if (this.task.description.length > 100) {
        window.alert('La description ne doit pas dépasser 100 caractères.');
        return;
      }
      if (wordCount < 5) {
        window.alert('La description doit contenir au moins 5 mots.');
        return;
      }

      const success = this.taskService.updateTask(this.task);
      if (success) {
        window.alert('Tâche mise à jour avec succès!');
        this.router.navigate(['/taskList']);
      } else {
        window.alert('Erreur : Une tâche avec ce titre existe déjà');
      }
    } else {
      window.alert('Veuillez remplir tous les champs requis.');
    }
  }
}
