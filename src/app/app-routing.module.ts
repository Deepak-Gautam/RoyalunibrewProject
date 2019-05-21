import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlagsComponent } from './flags/flags.component';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { EntriesComponent } from './entries/entries.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: FlagsComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'add', component: EntryLogsComponent},
  {path: 'entries', component: EntriesComponent},
  {path: 'add/:id' , component: EntryLogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
