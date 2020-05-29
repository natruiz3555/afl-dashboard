import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
import { HeadServiceService } from '../head-service.service';

@Component({
  selector: 'app-parent-head',
  templateUrl: './parent-head.component.html',
  styleUrls: ['./parent-head.component.css']
})
export class ParentHeadComponent implements OnInit {
  selectedTeamA: Team;
  selectedTeamB: Team;
  teams: Team[];

  constructor(private dataService:HeadServiceService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelectA(team: Team): void{
    this.selectedTeamA = team;
  }

  onSelectB(team: Team): void{
    this.selectedTeamB = team;
  }

  getTeams(): void{
    this.dataService.getTeams().subscribe(temp => {this.teams = temp});
  }

}
