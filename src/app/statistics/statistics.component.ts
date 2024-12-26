import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CategoryService } from '../services/category.service';
import { Task } from '../models/task.model';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';

// Enregistrer tous les modules Chart.js nécessaires
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('statusChart') statusChart!: ElementRef;
  @ViewChild('statusBarChart') statusBarChart!: ElementRef;
  
  totalCategories: number = 0;
  totalTasks: number = 0;
  todoTasks: number = 0;
  inProgressTasks: number = 0;
  doneTasks: number = 0;
  chart: Chart | undefined;
  barChart: Chart | undefined;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.calculateStatistics();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.createChart();
      this.createBarChart();
    }, 0);
  }

  calculateStatistics() {
    this.totalCategories = this.categoryService.getCategories().length;
    const tasks = this.taskService.getTasks();
    this.totalTasks = tasks.length;
    this.todoTasks = tasks.filter(task => task.status === 'TODO').length;
    this.inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS').length;
    this.doneTasks = tasks.filter(task => task.status === 'DONE').length;
  }

  createChart() {
    if (this.statusChart && this.statusChart.nativeElement) {
      const ctx = this.statusChart.nativeElement.getContext('2d');
      
      const data: ChartData = {
        labels: ['À faire', 'En cours', 'Terminées'],
        datasets: [{
          data: [this.todoTasks, this.inProgressTasks, this.doneTasks],
          backgroundColor: [
            'rgb(220, 53, 69)',  // danger
            'rgb(255, 193, 7)',  // warning
            'rgb(40, 167, 69)'   // success
          ],
          borderWidth: 1
        }]
      };

      const config: ChartConfiguration = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            },
            title: {
              display: true,
              text: 'Répartition des Tâches par Statut',
              font: {
                size: 16
              }
            }
          }
        }
      };

      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, config);
    }
  }

  createBarChart() {
    if (this.statusBarChart && this.statusBarChart.nativeElement) {
      const ctx = this.statusBarChart.nativeElement.getContext('2d');
      
      const data: ChartData = {
        labels: ['À faire', 'En cours', 'Terminées'],
        datasets: [{
          label: 'Progression des tâches',
          data: [this.todoTasks, this.inProgressTasks, this.doneTasks],
          backgroundColor: [
            'rgba(40, 167, 69, 0.2)'  // success avec transparence
          ],
          borderColor: 'rgb(40, 167, 69)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: [
            'rgb(220, 53, 69)',   // rouge pour TODO
            'rgb(255, 193, 7)',   // jaune pour IN_PROGRESS
            'rgb(40, 167, 69)'    // vert pour DONE
          ],
          pointBorderColor: [
            'rgb(220, 53, 69)',
            'rgb(255, 193, 7)',
            'rgb(40, 167, 69)'
          ],
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      };

      const config: ChartConfiguration = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: 'Progression des Tâches',
              font: {
                size: 16
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              },
              title: {
                display: true,
                text: 'Nombre de tâches'
              }
            },
            x: {
              grid: {
                display: false
              },
              title: {
                display: true,
                text: 'Statut'
              }
            }
          },
          elements: {
            line: {
              tension: 0.4
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        }
      };

      if (this.barChart) {
        this.barChart.destroy();
      }
      this.barChart = new Chart(ctx, config);
    }
  }
}
