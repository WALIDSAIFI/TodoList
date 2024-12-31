export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  categoryId: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}
