import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPremiershipWinnersComponent } from './previous-premiership-winners.component';

describe('PreviousPremiershipWinnersComponent', () => {
  let component: PreviousPremiershipWinnersComponent;
  let fixture: ComponentFixture<PreviousPremiershipWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPremiershipWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPremiershipWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
