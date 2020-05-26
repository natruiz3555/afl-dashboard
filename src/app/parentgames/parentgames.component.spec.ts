import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentgamesComponent } from './parentgames.component';

describe('ParentgamesComponent', () => {
  let component: ParentgamesComponent;
  let fixture: ComponentFixture<ParentgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
