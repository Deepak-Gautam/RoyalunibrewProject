import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { EntriesComponent } from './entries/entries.component';
// import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    EntryLogsComponent,
    SvgIconsComponent,
    EntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    // MatDatepickerModule, MatInputModule,MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
