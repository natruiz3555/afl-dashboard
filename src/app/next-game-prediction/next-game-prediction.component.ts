import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { TipService } from '../tip.service';
import { Team } from '../team';
import { Tip } from '../tip';

@Component({
  selector: 'app-next-game-prediction',
  templateUrl: './next-game-prediction.component.html',
  styleUrls: ['./next-game-prediction.component.css']
})
export class NextGamePredictionComponent implements OnInit, OnChanges {
  @Input() team: Team;
  otherTeam: Team;
  @Input() teams: Team[];
  latestTip: Tip;

  constructor(private tipService: TipService) { }

  getTeam(teamId: number): Team {
    return this.teams.find(team => (team.id === teamId));
  }

  getTeamUrl(teamId: number) {
    return `https://squiggle.com.au/${this.getTeam(teamId).logo}`;
  }

  getTeamChance() {
    if (this.team.id === this.latestTip.ateamid) {
      return this.latestTip.confidence;
    } else {
      return this.latestTip.hconfidence;
    }
  }

  ngOnInit(): void {
    this.getLatestTip();
  }

  ngOnChanges(): void {
    this.getLatestTip();
  }

  getLatestTip(): void {
    this.tipService.getTips().subscribe((tips: Tip[]) => {
      // Order by round.
      tips = tips.sort((tip1: Tip, tip2: Tip) => tip1.round - tip2.round);
      // Filter to after round 19.
      tips = tips.filter(tip => tip.round >= 20);
      // Filter to tips that match this team.
      tips = tips.filter(tip => (tip.ateamid === this.team.id || tip.hteamid === this.team.id));
      // Get the first tip in that list.
      this.latestTip = tips[0];
      // Update the other team based on the tip.
      if (this.team.id !== this.latestTip.ateamid) {
        this.otherTeam = this.getTeam(this.latestTip.ateamid);
      } else {
        this.otherTeam = this.getTeam(this.latestTip.hteamid);
      }
    });
  }
}
