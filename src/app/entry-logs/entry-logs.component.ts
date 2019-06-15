import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {EntryLogs} from '../entrylogs';
@Component({
  selector: 'app-entry-logs',
  templateUrl: './entry-logs.component.html',
  styleUrls: ['./entry-logs.component.css']
})
export class EntryLogsComponent implements OnInit {
  id;
  title: string;
  LicenseNumber: string;
  TrailerNumber: string;
  Name: string;
  CompanyName: string;
  Destination: string;
  DateTime: number = Date.now();
  form: FormGroup;
  entry = new EntryLogs();
  // entryDoc: AngularFirestoreDocument<EntryLogs>;
  // singleEntry: Observable<EntryLogs>;

  constructor(fb: FormBuilder,  private afs: AngularFirestore,
              private router: Router, private route: ActivatedRoute, private location: Location) {
    this.form = fb.group({
      LicenseNumber: ['', Validators.required],
      TrailerNumber: ['', Validators.required],
      Name: ['', Validators.required],
      CompanyName: ['', Validators.required],
      Destination: ['', Validators.required],
      DateTime: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    if (!this.id) {
      this.title = 'demo.text16';
    } else {
      this.title = 'Edit Information';
      // this.entryDoc = this.afs.doc('entrylogs/' + this.id);
      // this.singleEntry = this.entryDoc.valueChanges();
      // this.singleEntry.subscribe((entry) => {
      //   this.form.get('LicenseNumber').setValue(entry.LicenseNumber);
      //   this.form.get('TrailerNumber').setValue(entry.TrailerNumber);
      //   this.form.get('Name').setValue(entry.Name);
      //   this.form.get('CompanyName').setValue(entry.CompanyName);
      //   this.form.get('Destination').setValue(entry.Destination);
      //   this.form.get('DateTime').setValue(entry.DateTime);
      // });
    }
  }
  submit() {
    if (this.id) {
      this.afs.doc('entrylogs' + this.id).update({
        LicenseNumber: this.entry.LicenseNumber,
        TrailerNumber: this.entry.TrailerNumber,
        Name: this.entry.Name,
        CompanyName: this.entry.CompanyName,
        Destination: this.entry.Destination,
        DateTime: this.entry.DateTime
      });
    } else {
      this.afs.collection('entrylogs').add({
        LicenseNumber: this.entry.LicenseNumber,
        TrailerNumber: this.entry.TrailerNumber,
        Name: this.entry.Name,
        CompanyName: this.entry.CompanyName,
        Destination: this.entry.Destination,
        DateTime: this.entry.DateTime
      }).then(ref => {ref.set({key: ref.id}, {merge: true});
    });

  }
    this.router.navigate(['/entries']);
  }
  goBack(): void {
    this.location.back();
  }

}
