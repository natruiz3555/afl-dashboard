import { Component, OnInit } from '@angular/core';
import {Team} from '../Team';
import {PastGamesService} from '../past-games.service';

@Component({
  selector: 'app-parentgames',
  templateUrl: './parentgames.component.html',
  styleUrls: ['./parentgames.component.css']
})
export class ParentgamesComponent implements OnInit {
  selectedTeam: Team;
  teams: Team[];

  constructor(private dataService:PastGamesService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(team: Team): void{
    this.selectedTeam = team;
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp}); //from onenote
  }

}
