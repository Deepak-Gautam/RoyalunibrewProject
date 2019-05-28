import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task, Track } from '../track.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-ngdrag',
  templateUrl: './ngdrag.component.html',
  styleUrls: ['./ngdrag.component.css']
})
export class NgdragComponent implements OnInit {
  private tracks: Track[] = require('../data.json');

  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    if (event.previousContainer !== event.container) {
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
