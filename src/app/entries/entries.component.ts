import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {EntryLogs} from '../entrylogs';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entryCol: AngularFirestoreCollection<EntryLogs>;
  entries: any;
  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.entryCol = this.afs.collection('/entrylogs', ref => ref.orderBy('Name' , 'desc' ).limit(1));
    this.entries = this.entryCol.snapshotChanges().pipe(
    map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as EntryLogs ;
        const id = a.payload.doc.id;
        return{ id, data}  ;
      });
    })
    );
  }
  add() {
    this.router.navigate(['add']);
  }

}
