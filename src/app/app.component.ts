import { Component, OnInit } from '@angular/core';
import {Team} from './team';
import {GameServiceService} from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'afl-dashboard';
  selectedTeam: Team;
  teams: Team[];

  constructor(private dataService: GameServiceService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(team: Team): void{
    this.selectedTeam = team;
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp; });
  }
}
