import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHeadComponent } from './child-head.component';

describe('ChildHeadComponent', () => {
  let component: ChildHeadComponent;
  let fixture: ComponentFixture<ChildHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
