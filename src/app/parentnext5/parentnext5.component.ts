import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
import { Next5Service } from '../next5.service';

@Component({
  selector: 'app-parentnext5',
  templateUrl: './parentnext5.component.html',
  styleUrls: ['./parentnext5.component.css']
})
export class Parentnext5Component implements OnInit {
  selectedTeam: Team;
  teams: Team[];

  constructor(private dataService:Next5Service) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(team: Team): void{
    this.selectedTeam = team;
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp});
  }
}
