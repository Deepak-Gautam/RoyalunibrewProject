import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitiesComponent } from './exities.component';

describe('ExitiesComponent', () => {
  let component: ExitiesComponent;
  let fixture: ComponentFixture<ExitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
