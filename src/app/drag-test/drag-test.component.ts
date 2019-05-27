import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-test',
  templateUrl: './drag-test.component.html',
  styleUrls: ['./drag-test.component.css']
})
export class DragTestComponent implements OnInit {
  aaa = [];
  xxx = [];
  List: [] = require('../instruction.json');
  List2: [] = require('../instruction1.json');

  drop(event: CdkDragDrop<string[]>) {

    if (event.item.data === 'Try to move me') {
      console.log('this isn\'t happening today');
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
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
