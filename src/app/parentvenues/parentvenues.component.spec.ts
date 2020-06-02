import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentvenuesComponent } from './parentvenues.component';

describe('ParentvenuesComponent', () => {
  let component: ParentvenuesComponent;
  let fixture: ComponentFixture<ParentvenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentvenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentvenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
