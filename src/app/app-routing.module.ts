import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagsComponent } from './flags/flags.component';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { EntriesComponent } from './entries/entries.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SelectionComponent } from './selection/selection.component';
import { ExitLogsComponent } from './exit-logs/exit-logs.component';
import { ExitiesComponent } from './exities/exities.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgdragComponent } from './ngdrag/ngdrag.component';
import { UnidocComponent } from './unidoc/unidoc.component';
import { LoginComponent } from './login/login.component';
import { EntryExitListComponent } from './entry-exit-list/entry-exit-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: FlagsComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'entry', component: EntryLogsComponent },
  { path: 'exit', component: ExitLogsComponent },
  { path: 'entries', component: EntriesComponent },
  { path: 'exities', component: ExitiesComponent },
  { path: 'entry/:id', component: EntryLogsComponent },
  { path: 'exit/:id', component: ExitLogsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'ngdrag', component: NgdragComponent },
  { path: 'unidoc', component: UnidocComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: EntryExitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
