import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildgamesComponent } from './childgames.component';

describe('ChildgamesComponent', () => {
  let component: ChildgamesComponent;
  let fixture: ComponentFixture<ChildgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
