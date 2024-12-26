// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private storageKey = 'categories';

  constructor() {
    // Vérifie si les catégories existent déjà dans localStorage, sinon les initialise
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  // Récupère toutes les catégories depuis localStorage
  getCategories(): Category[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // Ajoute une nouvelle catégorie dans localStorage
  addCategory(category: Category): boolean {
    const categories = this.getCategories();
    // Check if category with same name exists (case insensitive)
    if (categories.some((cat) => cat.name.toLowerCase() === category.name.toLowerCase())) {
      return false;
    }
   category.id = Date.now();
    categories.push(category);
    localStorage.setItem(this.storageKey, JSON.stringify(categories));
    return true;
  }

  // Supprime une catégorie par son ID
  deleteCategory(categoryId: number): void {
    const categories = this.getCategories().filter((cat) => cat.id !== categoryId);
    localStorage.setItem(this.storageKey, JSON.stringify(categories)); // Met à jour le stockage local
  }
}
