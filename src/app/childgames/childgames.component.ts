import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Game';
import { PastGamesService } from '../past-games.service';

@Component({
  selector: 'app-childgames',
  templateUrl: './childgames.component.html',
  styleUrls: ['./childgames.component.css']
})
export class ChildgamesComponent implements OnInit {
  @Input() team: Team;
  games: Game[];

  constructor(private pastGamesService: PastGamesService) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['team']) {
      this.getTeamGames();
    }
  }

  ngOnInit(): void {
    this.getTeamGames();
  }

  getGames(): void{
    //this.pastGamesService.getGames().subscribe(games => this.games = games); //async
    this.pastGamesService.getGames().subscribe(temp => {this.games = temp;});
  }

  getTeamGames(): void {
    this.pastGamesService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id) { tempArr.push(element);
      }
    });
      this.games = tempArr;
    });
  }

}
