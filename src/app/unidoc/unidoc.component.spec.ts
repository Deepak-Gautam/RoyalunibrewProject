import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidocComponent } from './unidoc.component';

describe('UnidocComponent', () => {
  let component: UnidocComponent;
  let fixture: ComponentFixture<UnidocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
