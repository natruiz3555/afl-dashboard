import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit, OnChanges {
  @Input() team: Team;
  games: Game[];

  constructor(private dataService: GameServiceService) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes.team) {
      this.getTeamGames();
    }
  }

  ngOnInit(): void {
    this.getTeamGames();
  }

  getTeamGames(): void {
    this.dataService.getGames().subscribe(temp => {
      temp = temp.filter(element => element.round >= 20);
      this.games = temp.filter(element => (element.hteamid === this.team.id || element.ateamid === this.team.id));
    });
  }
}
