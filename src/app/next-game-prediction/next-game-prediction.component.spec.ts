import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NextGamePredictionComponent } from './next-game-prediction.component';

describe('NextGamePredictionComponent', () => {
  let component: NextGamePredictionComponent;
  let fixture: ComponentFixture<NextGamePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextGamePredictionComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextGamePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
