import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EntriesComponent } from './entries/entries.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SelectionComponent } from './selection/selection.component';
import { ExitLogsComponent } from './exit-logs/exit-logs.component';
import { ExitiesComponent } from './exities/exities.component';
import { QuizComponent } from './quiz/quiz.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgdragComponent } from './ngdrag/ngdrag.component';
import { MatCardModule } from '@angular/material';
import { UnidocComponent } from './unidoc/unidoc.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EntryExitListComponent } from './entry-exit-list/entry-exit-list.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrderModule } from 'ngx-order-pipe';

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
    NgdragComponent,
    UnidocComponent,
    LoginComponent,
    EntryExitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatCardModule,
    AngularFireAuthModule,
    OrderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('English');
  }

}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
