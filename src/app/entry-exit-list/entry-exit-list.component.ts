import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {EntryLogs} from '../entrylogs';
import {ExitLogs} from '../exitlogs';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-entry-exit-list',
  templateUrl: './entry-exit-list.component.html',
  styleUrls: ['./entry-exit-list.component.css']
})
export class EntryExitListComponent implements OnInit {
  entryCol: AngularFirestoreCollection<EntryLogs>;
  entries: any;
  exitCol: AngularFirestoreCollection<ExitLogs>;
  exities: any;
  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.entryCol = this.afs.collection('entrylogs');
    this.entries = this.entryCol.snapshotChanges().pipe(
    map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as EntryLogs ;
        const id = a.payload.doc.id;
        return{ id, data}  ;
      });
    })
    );
    this.exitCol = this.afs.collection('exitlogs');
    // this.exitCol = this.afs.collection('exitlogs/');
    this.exities = this.exitCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ExitLogs;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

}
