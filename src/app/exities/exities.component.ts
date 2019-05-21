import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {ExitLogs} from '../exitlogs';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-exities',
  templateUrl: './exities.component.html',
  styleUrls: ['./exities.component.css']
})
export class ExitiesComponent implements OnInit {

  exitCol: AngularFirestoreCollection<ExitLogs>;
  exities: any;
  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    // this.exitCol = this.afs.collection('/exitlogs', ref => ref.orderBy('Name' , 'desc' ).limit(1));
    this.exitCol = this.afs.collection('/exitlogs');
    this.exities = this.exitCol.snapshotChanges().pipe(
    map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as ExitLogs ;
        const id = a.payload.doc.id;
        return{ id, data}  ;
      });
    })
    );
  }
  add() {
    this.router.navigate(['exit']);
  }

}
