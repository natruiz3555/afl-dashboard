import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';
import { HeadServiceService } from '../head-service.service';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit, OnChanges {
  @Input() team: Team;
  @Input() teams: Team[];
  selectedTeamB: Team;
  games: Game[];

  constructor(private dataService: HeadServiceService) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes.team) {
      this.getTeamGames();
    }
    if (changes.selectedTeamB)
    {
      this.getTeamGames();
    }
  }

  ngOnInit(): void {
    this.getTeams();
  }

  getGames(): void{
    this.dataService.getGames().subscribe(temp => {this.games = temp; });
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp; });
  }

  onSelectB(team: Team): void{
    this.selectedTeamB = team;
  }

  getTeamGames(): void {
    this.dataService.getGames().subscribe(temp => {
      temp = temp.filter(element => element.round >= 20);
      this.games = temp.filter(element => ((element.hteamid == this.team.id && element.ateamid == this.selectedTeamB.id)
      || (element.hteamid == this.selectedTeamB.id && element.ateamid == this.team.id)))
    });
  }

  isLoaded(): boolean {
    return this.games.length >= 1;
  }

}