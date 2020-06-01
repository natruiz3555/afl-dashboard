import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-next-game-prediction',
  templateUrl: './next-game-prediction.component.html',
  styleUrls: ['./next-game-prediction.component.css']
})
export class NextGamePredictionComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
