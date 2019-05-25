import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdragComponent } from './ngdrag.component';

describe('NgdragComponent', () => {
  let component: NgdragComponent;
  let fixture: ComponentFixture<NgdragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
