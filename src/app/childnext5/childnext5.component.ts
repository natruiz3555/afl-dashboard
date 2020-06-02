import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Game';
import { Next5Service } from '../next5.service';

@Component({
  selector: 'app-childnext5',
  templateUrl: './childnext5.component.html',
  styleUrls: ['./childnext5.component.css']
})
export class Childnext5Component implements OnInit {
  @Input() team: Team;
  games: Game[];

  constructor(private dataService: Next5Service) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['team']) {
      this.getFutureGames();
    }
  }

  ngOnInit(): void {
    this.getFutureGames();
  }

  getGames(): void{
    this.dataService.getGames().subscribe(temp => {this.games = temp;});
  }

  getFutureGames(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if ((element.hteamid == this.team.id || element.ateamid == this.team.id)
        && element.round <= 20)
        { tempArr.push(element); }
      });
      this.games = tempArr.slice(0, 5);
    });
  }

}
