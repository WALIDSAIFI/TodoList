import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addTask(task: Task): boolean {
    const tasks = this.getTasks();
    task.id = Date.now();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return true;
  }

  updateTask(task: Task): boolean {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
      return true;
    }
    return false;
  }

  deleteTask(taskId: number): void {
    const tasks = this.getTasks().filter(task => task.id !== taskId);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTasksByCategory(categoryId: number): Task[] {
    return this.getTasks().filter(task => task.categoryId === categoryId);
  }
} 