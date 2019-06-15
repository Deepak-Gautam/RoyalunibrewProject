import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task, Track } from '../track.model';

@Component({
  selector: 'app-ngdrag',
  templateUrl: './ngdrag.component.html',
  styleUrls: ['./ngdrag.component.css']
})
export class NgdragComponent implements OnInit {
  tracks: Track[] = require('../data.json');

  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTaskDrop(event: CdkDragDrop<Task[]>) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    if (event.previousContainer !== event.container && event.container.id === event.item.element.nativeElement.id) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
