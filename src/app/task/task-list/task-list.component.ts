import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  allTasks: Task[] = [];
  categories: Category[] = [];
  searchTerm: string = '';

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    public router: Router
  ) {
    this.loadTasks();
    this.categories = this.categoryService.getCategories();
  }

  loadTasks(): void {
    this.allTasks = this.taskService.getTasks();
    this.tasks = [...this.allTasks];
  }

  filterTasks(): void {
    if (!this.searchTerm) {
      this.tasks = [...this.allTasks];
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.tasks = this.allTasks.filter(task =>
        task.title.toLowerCase().includes(searchTermLower) ||
        task.description.toLowerCase().includes(searchTermLower) ||
        this.getCategoryName(task.categoryId).toLowerCase().includes(searchTermLower)
      );
    }
  }

  deleteTask(taskId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      this.taskService.deleteTask(taskId);
      this.loadTasks();
    }
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Non catégorisé';
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'TODO': return 'À faire';
      case 'IN_PROGRESS': return 'En cours';
      case 'DONE': return 'Terminé';
      default: return status;
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'TODO': return 'badge bg-danger';
      case 'IN_PROGRESS': return 'badge bg-warning';
      case 'DONE': return 'badge bg-success';
      default: return 'badge bg-secondary';
    }
  }
}
