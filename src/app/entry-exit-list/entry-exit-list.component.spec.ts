import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryExitListComponent } from './entry-exit-list.component';

describe('EntryExitListComponent', () => {
  let component: EntryExitListComponent;
  let fixture: ComponentFixture<EntryExitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryExitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryExitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
