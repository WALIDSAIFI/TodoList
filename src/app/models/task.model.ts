export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  categoryId: number;
}
