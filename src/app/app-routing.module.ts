import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagsComponent } from './flags/flags.component';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { EntriesComponent } from './entries/entries.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SelectionComponent } from './selection/selection.component';
import { ExitLogsComponent } from './exit-logs/exit-logs.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: FlagsComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'entry', component: EntryLogsComponent},
  {path: 'exit', component: ExitLogsComponent},
  {path: 'entries', component: EntriesComponent},
  {path: 'entry/:id' , component: EntryLogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
