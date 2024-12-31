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
    this.migrateTasksData();
  }

  private migrateTasksData() {
    const tasks = this.getTasks();
    const updatedTasks = tasks.map(task => ({
      ...task,
      priority: task.priority || 'MEDIUM'
    }));
    localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private validateDescription(description: string): boolean {
  
    if (description.length > 100) {
      return false;
    }
    const wordCount = description.length;
    return wordCount >= 5;
  }

  addTask(task: Task): boolean {
    const tasks = this.getTasks();
    
    if (tasks.some(t => t.title.toLowerCase() === task.title.toLowerCase())) {
      return false;
    }
    if (!task.categoryId || task.categoryId === 0) {
      return false;
    }

    if (!this.validateDescription(task.description)) {
      return false;
    }

    task.id = Date.now();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return true;
  }

  updateTask(task: Task): boolean {
    const tasks = this.getTasks();
    
    if (!task.categoryId || task.categoryId === 0) {
      return false;
    }
    if (!this.validateDescription(task.description)) {
      return false;
    }

    const index = tasks.findIndex(t => t.id === task.id);
    
    const titleExists = tasks.some(
      t => t.id !== task.id && t.title.toLowerCase() === task.title.toLowerCase()
    );

    if (titleExists) {
      return false;
    }

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