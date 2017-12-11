import { Task } from './../task';
import { TaskService } from './../task.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskNewComponent implements OnInit {
  task = new Task();

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.task)
    this._taskService.tasks.push(this.task);
    console.log(this._taskService.tasks)
    this.task = new Task();
  }

}