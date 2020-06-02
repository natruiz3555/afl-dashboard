import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childnext5Component } from './childnext5.component';

describe('Childnext5Component', () => {
  let component: Childnext5Component;
  let fixture: ComponentFixture<Childnext5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childnext5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childnext5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
