import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
interface Flag {
  imageUrl: string;
  name: string;
}

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
flagsCol: AngularFirestoreCollection<Flag>;
flags: any;
// flagsdoc: AngularFirestoreDocument<Flag>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.flagsCol = this.afs.collection('flags');
    this.flags = this.flagsCol.valueChanges();
}
}