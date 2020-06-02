import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentnext5Component } from './parentnext5.component';

describe('Parentnext5Component', () => {
  let component: Parentnext5Component;
  let fixture: ComponentFixture<Parentnext5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentnext5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentnext5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
