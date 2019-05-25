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
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { EntriesComponent } from './entries/entries.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SelectionComponent } from './selection/selection.component';
import { ExitLogsComponent } from './exit-logs/exit-logs.component';
import { ExitiesComponent } from './exities/exities.component';
import {QuizComponent} from './quiz/quiz.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
// import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    EntryLogsComponent,
    EntriesComponent,
    NavbarComponent,
    InstructionsComponent,
    SelectionComponent,
    ExitLogsComponent,
    ExitiesComponent,
    QuizComponent,
    DragDropComponent
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
    DragDropModule,
    // MatDatepickerModule, MatInputModule,MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
