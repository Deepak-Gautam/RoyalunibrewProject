import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import {Ordernum} from '../ordernum';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  todo = [
    // 'Get to work',
    // 'Pick up groceries',
    // 'Go home',
    // 'Fall asleep'

  ];
done = [
  // 'Get up',
  // 'Brush Teeth',
  // 'Take a shower',
  // 'check e-mail',
  // 'walk dog'

];

usersCol: AngularFirestoreCollection<Ordernum>;
ordernumber: any;
constructor(private afs: AngularFirestore, private router: Router) {

 }

 ngOnInit() {
  this.usersCol = this.afs.collection('ordernumber');
  this.ordernumber = this.usersCol.snapshotChanges().pipe(
  map(actions => {
    return actions.map( a => {
      const data = a.payload.doc.data() as Ordernum;
      const id = a.payload.doc.id;
      return{ id, data};
    });
  })
  );
}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
