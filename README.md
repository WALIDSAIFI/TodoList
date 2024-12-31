# 📝 ToDoList Application  

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
---

## 🖥️ Structure du Projet  

```plaintext
src/  
├── app/  
│   ├───|──
│   │   ├── Catégories/ 
│   │   ├── task      
│   │   ├── Statistics/        
│   │   
│   ├── services/            # Services Angular  
│   ├── models/              # Modèles de données  
│   ├── pipes/               # Pipes pour le formatage  
│   ├── modules/             # Modules Angular  
│   └── app-routing.module.ts # Routage principal  
├── assets/                  # Assets (images, icônes, etc.)  
└── environments/            # Fichiers de configuration  



---


---

# 📝 ToDoList Angular Application  

Une application moderne et personnalisable pour gérer vos tâches efficacement.  

---
## 🎯 Installation et Lancement  

1. Clonez le dépôt :  
   ```bash  
   git clone https://github.com/WALIDSAIFI/
   

```bash
# Accédez au dossier du projet  
cd todolist-angular  

# Installez les dépendances  
npm install  

# Lancez l'application  
ng serve  

# Accédez à l'application via  
http://localhost:4200  





### Explication des Dossiers et Fichiers  
- **components/** : Contient les composants Angular pour ![dashbord](https://github.com/user-attachments/assets/55e59dd3-3ac1-4d16-a05a-f4ef8f6a69c8)
les fonctionnalités principales.  
- **services/** : Gère la logique métier et la communication entre composants.  
- **models/** : Définit les modèles de données utilisés dans l'application.  
- **pipes/** : Pipes personnalisés pour le formatage des données (dates, textes).  
- **modules/** : Organise l'application en modules Angular.  
- **app-routing.module.ts** : Configuration des routes de l'application.  
- **assets/** : Ressources comme les images et les icônes.  
- **environments/** : Fichiers de configuration pour différents environnements (dev, prod).  

---  


