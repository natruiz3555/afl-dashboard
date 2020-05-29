import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHeadComponent } from './parent-head.component';

describe('ParentHeadComponent', () => {
  let component: ParentHeadComponent;
  let fixture: ComponentFixture<ParentHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
