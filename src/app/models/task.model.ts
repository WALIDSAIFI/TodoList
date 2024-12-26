export enum Priority {
  Haute = 'haute',
  Moyenne = 'moyenne',
  Basse = 'basse'
}

export enum Status {
  Termine = 'terminé',
  EnCours = 'en cours',
  PasCommence = 'pas commencé'
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: string;
  priority: Priority;      
  status: Status;
  category: string;
}
