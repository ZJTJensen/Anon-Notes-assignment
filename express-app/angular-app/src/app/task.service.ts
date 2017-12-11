import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasksObserver = new BehaviorSubject([]);
  tasks: Task[] = []

  constructor(private _http: Http) { }

  retrieveAll(): Task[] {
    return this.tasks.reverse();
  }
}