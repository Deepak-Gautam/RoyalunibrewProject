import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, merge } from 'rxjs';
import { Location } from '@angular/common';
import { ExitLogs } from '../exitlogs';

@Component({
  selector: 'app-exit-logs',
  templateUrl: './exit-logs.component.html',
  styleUrls: ['./exit-logs.component.css']
})
export class ExitLogsComponent implements OnInit {
  id;
  title: string;
  LicenseNumber: string;
  TrailerNumber: string;
  Name: string;
  CompanyName: string;
  Destination: string;
  DateTime: number = Date.now();
  ordernumber: string;
  randomnum: number;
  form: FormGroup;
  exit = new ExitLogs();
  entryDoc: AngularFirestoreDocument<ExitLogs>;
  singleEntry: Observable<ExitLogs>;

  constructor(fb: FormBuilder, private afs: AngularFirestore,
    private router: Router, private route: ActivatedRoute, private location: Location) {
    this.form = fb.group({
      LicenseNumber: ['', Validators.required],
      TrailerNumber: ['', Validators.required],
      Name: ['', Validators.required],
      CompanyName: ['', Validators.required],
      Destination: ['', Validators.required],
      DateTime: ['', Validators.required],
      ordernumber: ['', Validators.required]
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
      this.entryDoc = this.afs.doc('exitlogs/' + this.id);
      this.singleEntry = this.entryDoc.valueChanges();
      this.singleEntry.subscribe((entry) => {
        this.form.get('LicenseNumber').setValue(entry.LicenseNumber);
        this.form.get('TrailerNumber').setValue(entry.TrailerNumber);
        this.form.get('Name').setValue(entry.Name);
        this.form.get('CompanyName').setValue(entry.CompanyName);
        this.form.get('Destination').setValue(entry.Destination);
        this.form.get('DateTime').setValue(entry.DateTime);
        this.form.get('ordernumber').setValue(entry.ordernumber);
      });
    }
  }
  submit() {
    if (this.id) {
      this.afs.doc('exitlogs/' + this.id).update({
        LicenseNumber: this.exit.LicenseNumber,
        TrailerNumber: this.exit.TrailerNumber,
        Name: this.exit.Name,
        CompanyName: this.exit.CompanyName,
        Destination: this.exit.Destination,
        DateTime: this.exit.DateTime,
        ordernumber: this.exit.ordernumber
      });
      this.location.back();
    } else {
      this.afs.collection('exitlogs').add({
        LicenseNumber: this.exit.LicenseNumber,
        TrailerNumber: this.exit.TrailerNumber,
        Name: this.exit.Name,
        CompanyName: this.exit.CompanyName,
        Destination: this.exit.Destination,
        DateTime: this.exit.DateTime,
        ordernumber: this.exit.ordernumber,
        randomnum: (Math.floor((Math.random() * 10000) + 1000)),
        // }).then(ref => {ref.set({key: ref.id}, {merge: true});
      });
      this.router.navigate(['/exities']);
    }
  }
  // goBack(): void {
  //   this.location.back();
  // }

}
