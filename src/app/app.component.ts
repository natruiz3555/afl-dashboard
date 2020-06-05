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

  onSelect(event): void {
    this.selectedTeam = this.teams[event.target.selectedIndex - 1];
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp; });
  }
}
