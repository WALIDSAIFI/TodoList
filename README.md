# 📝 ToDoList Application  

![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)  
![SCSS](https://img.shields.io/badge/SCSS-Used-blue?style=for-the-badge&logo=sass)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-Used-purple?style=for-the-badge&logo=bootstrap)  
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?style=for-the-badge&logo=typescript)  
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)  

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
- Système de recherche en temps réel basé sur le **titre** ou la **description** des tâches.  

### 📊 Tableau de Bord Statistique  
- **Pourcentage de tâches accomplies** et non accomplies.  
- **Nombre de tâches en retard**.  
- Intégration graphique interactive avec **NgxCharts** ou **Chart.js**.  

---

## 🛠️ Technologies Utilisées  
- **Frontend** :  
  - Angular 17  
  - TypeScript  
  - SCSS (ou CSS)  
  - Bootstrap / Tailwind  

- **Autres outils** :  
  - LocalStorage pour la persistance des données.  
  - Observables pour la gestion réactive.  
  - Pipes pour le formatage des données.  

---

## 🖥️ Structure du Projet  

src/
├── app/
│ ├── components/ # Composants réutilisables
│ │ ├── task-list/ # Liste des tâches
│ │ ├── task-form/ # Formulaire d'ajout/modification
│ │ ├── dashboard/ # Tableau de bord statistique
│ │ └── search-bar/ # Barre de recherche
│ ├── services/ # Services Angular
│ ├── models/ # Modèles de données
│ ├── pipes/ # Pipes pour le formatage
│ ├── modules/ # Modules Angular
│ └── app-routing.module.ts # Routage principal
├── assets/ # Assets (images, icônes, etc.)
└── environments/ # Fichiers de configuration


---

## 🎯 Installation et Lancement  

1. Clonez le dépôt :  
   ```bash  
   git clone https://github.com/WALIDSAIFI/TodoList
   
