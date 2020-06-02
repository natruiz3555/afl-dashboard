import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcladComponent } from './childclad.component';

describe('ChildcladComponent', () => {
  let component: ChildcladComponent;
  let fixture: ComponentFixture<ChildcladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
