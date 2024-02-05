import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStatus } from 'src/app/model/enums/task-status';
import { TaskModel } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$ : Observable<TaskModel[]> |undefined;
  colorsSet: { [taskNumber: string] : string; } = {};
  
  constructor(private tasksService: TasksService) { 
    this.colorsSet[TaskStatus.Done] = "green"
    this.colorsSet[TaskStatus.Open] = "red"

  }
  ngOnInit(): void {
   this.tasks$ = this.tasksService.getTasks()
  }

  

}
