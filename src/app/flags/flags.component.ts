import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { TranslateService } from '@ngx-translate/core';

class Flag {
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
  entry = new Flag();
  
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private translate: TranslateService) {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.flagsCol = this.afs.collection('flags');
    this.flags = this.flagsCol.valueChanges();
  }
}
