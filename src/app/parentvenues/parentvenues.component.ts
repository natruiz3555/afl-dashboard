import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-parentvenues',
  templateUrl: './parentvenues.component.html',
  styleUrls: ['./parentvenues.component.css']
})
export class ParentvenuesComponent implements OnInit {
  selectedTeam: Team;
  teams: Team[];
  
  constructor(private dataService: VenuesService) { }

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
