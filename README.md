# 🖍 ToDoList Application  

![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)  
![CSS](https://img.shields.io/badge/CSS-Used-blue?style=for-the-badge&logo=css)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-Used-purple?style=for-the-badge&logo=bootstrap)  
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?style=for-the-badge&logo=typescript)  

Une application de gestion de tâches moderne et intuitive, développée avec **Angular 17**, pour une expérience utilisateur fluide et réactive.  

---

## 🚀 Fonctionnalités Principales  
### 📋 Gestion des Tâches  
- **Créer, modifier et supprimer** des tâches.  
- Champs disponibles :  
  - Titre (validation de longueur).  
  - Description (optionnelle).  
  - Date et heure d'échéance (avec validation).  
  - Priorité : haute, moyenne, basse.  
  - Statut : non commencée, en cours, terminée.  

### 📂 Gestion des Catégories  
- Catégorisation des tâches (Travail, Personnel, Courses, etc.).  
- Ajout, modification et suppression des catégories avec validation des doublons.  

### 🔍 Recherche Dynamique  
- Système de recherche en temps réel basé sur le **titre** des tâches.  

### 📊 Tableau de Bord Statistique  
- **Pourcentage de tâches accomplies** et non accomplies.  
- **Nombre de tâches en retard**.  
- Intégration graphique interactive avec **Chart.js**.  

---

## 🛠️ Technologies Utilisées  
- **Frontend** :  
  - Angular 17  
  - TypeScript  
  - CSS  
  - Bootstrap  

- **Autres outils** :  
  - LocalStorage pour la persistance des données.  
  - Observables pour la gestion réactive.  
  - Pipes pour le formatage des données.  

---

## 🖥️ Structure du Projet  

```plaintext
src/  
├── app/  
│   ├── Catégories/
│   ├── Tasks/      
│   ├── Statistics/        
│   ├── services/            # Services Angular  
│   ├── models/              # Modèles de données  
│   ├── pipes/               # Pipes pour le formatage  
│   ├── modules/             # Modules Angular  
│   └── app-routing.module.ts # Routage principal  
├── assets/                  # Assets (images, icônes, etc.)  
└── environments/            # Fichiers de configuration  
```

---

## 🎯 Installation et Lancement  

1. Clonez le dépôt :  
   ```bash  
   git clone https://github.com/WALIDSAIFI/todolist-angular
   ```

2. Accédez au dossier du projet :  
   ```bash
   cd todolist-angular
   ```

3. Installez les dépendances :  
   ```bash
   npm install
   ```

4. Lancez l'application :  
   ```bash
   ng serve
   ```

5. Accédez à l'application via :  
   [http://localhost:4200](http://localhost:4200)  

---

## 🜐 Captures d'écran  

### 🔄 Tableau de Bord Statistique  
![Dashboard](https://github.com/WALIDSAIFI/TodoList/blob/main/dashbord.png)  

### 🔍 Recherche Dynamique  
![Search](https://github.com/user-attachments/assets/task-search.png)  

### 📂 Gestion des Catégories  
![Categories](https://github.com/user-attachments/assets/manage-categories.png)  

### 📃 Gestion des Tâches  
![Tasks](https://github.com/user-attachments/assets/manage-tasks.png)

