import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildvenuesComponent } from './childvenues.component';

describe('ChildvenuesComponent', () => {
  let component: ChildvenuesComponent;
  let fixture: ComponentFixture<ChildvenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildvenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildvenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
