import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcladComponent } from './parentclad.component';

describe('ParentcladComponent', () => {
  let component: ParentcladComponent;
  let fixture: ComponentFixture<ParentcladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
