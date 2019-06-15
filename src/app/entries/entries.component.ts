import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { EntryLogs } from '../entrylogs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})

export class EntriesComponent implements OnInit {

  entryCol: AngularFirestoreCollection<EntryLogs>;
  entries: any;
  reverse = false;
  order = 'data.DateTime';

  constructor(private afs: AngularFirestore, private router: Router) {
    // this.sortedCollection = orderPipe.transform(this.entryCol, 'data.DateTime');
    // console.log(this.sortedCollection);
  }

  ngOnInit() {
    this.entryCol = this.afs.collection('entrylogs');
    this.entries = this.entryCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as EntryLogs;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }
  add() {
    this.router.navigate(['entry']);
  }
  myFunction() {
    window.print();
  }
}
