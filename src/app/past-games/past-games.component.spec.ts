import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PastGamesComponent } from './past-games.component';
import { Team } from '../team';

describe('PastGamesComponent', () => {
  let component: PastGamesComponent;
  let fixture: ComponentFixture<PastGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastGamesComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastGamesComponent);
    component = fixture.componentInstance;
    component.team = new Team('logo.png', 1, 'Team', 'TEAM');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
