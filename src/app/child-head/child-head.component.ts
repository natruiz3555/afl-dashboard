import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Game';
import { HeadServiceService } from '../head-service.service';

@Component({
  selector: 'app-child-head',
  templateUrl: './child-head.component.html',
  styleUrls: ['./child-head.component.css']
})
export class ChildHeadComponent implements OnInit {
  @Input() teamA: Team;
  @Input() teamB: Team;
  games: Game[];

  constructor(private dataService: HeadServiceService) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['teamA']) {
      this.getTeamGames();
    }
    if (changes['teamB'])
    {
      this.getTeamGames();
    }
  }

  ngOnInit(): void {
    this.getTeamGames(); 
    //doesnt display "no games" if invalid choice selected but who cares. will ask for nathan's help if he brings it up
  }

  getGames(): void{
    this.dataService.getGames().subscribe(temp => {this.games = temp;});
  }

  getTeamGames(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if((element.hteamid == this.teamA.id && element.ateamid == this.teamB.id)
        || (element.hteamid == this.teamB.id && element.ateamid == this.teamA.id) && element.round <= 20)
        { tempArr.push(element); }
      });
      this.games = tempArr;
    });
  }

}