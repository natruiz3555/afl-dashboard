import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Game';
import { Venue } from '../Venue';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-childvenues',
  templateUrl: './childvenues.component.html',
  styleUrls: ['./childvenues.component.css']
})
export class ChildvenuesComponent implements OnInit {
  @Input() team: Team;
  games: Game[];
  venues: Venue[];

  constructor(private dataService: VenuesService) { }

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['team']) {
      this.getVenues();
      //this.getVenuesNamesss();
    }
  }

  ngOnInit(): void {
    this.getVenues();
    //this.getVenuesNamesss();
  }

  getVenues(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if ((element.winner == this.team.name) && element.round <= 20)
        { tempArr.push(element); }
        //if (element.venue )
      });
      this.games = tempArr;
    }); //somehow have a counter that ticks up each time venue is repeated
    //either here or in html.
  }

  /*getVenueCount(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      var venueNames =  {};
      temp.forEach(element => {
        if (element.venue != this.games.venue) { tempArr.push(element); }
        //if (element.venue == this.venues.venue) { } //somehow increase number
        //if we can get this function to work as is, then no need for counter. this is no counter contingency
      });
      this.venues = tempArr;
      for (var i = 0; i < tempArr.length; i++)
      {

      }
    });
  }*/

  /*getVenuesNamesss(): void{
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        if ((element.winner == this.team.name) && element.round <= 20)
        { tempArr.push(element.venue); }
        //if (element.venue )
      });
      this.venues = tempArr;
    }); //somehow have a counter that ticks up each time venue is repeated
    //either here or in html.
  }*/

  /*getGames(): void{
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
  }*/

}
