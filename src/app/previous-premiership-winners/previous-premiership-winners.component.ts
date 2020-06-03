import { Component, OnInit, Input } from '@angular/core';

import { LadderService } from '../ladder.service';
import { Ladder } from '../ladder';
import { CompileTemplateSummary } from '@angular/compiler';
import { Team } from '../team';

@Component({
  selector: 'app-previous-premiership-winners',
  templateUrl: './previous-premiership-winners.component.html',
  styleUrls: ['./previous-premiership-winners.component.css']
})
export class PreviousPremiershipWinnersComponent implements OnInit {
  @Input() teams: Team[];
  currentLadders: Ladder[] = [];

  constructor(private ladderService: LadderService) { }

  ngOnInit(): void {
    const startYear = new Date().getFullYear() - 5;
    for (let i = 0; i < 5; ++i) {
      const year = startYear + i;
      this.ladderService.getLadder(year).subscribe(ladder => {
        this.currentLadders.push(ladder);
        this.currentLadders.sort((a, b) => a.year - b.year);
      });
    }
  }

  getTeamName(teamId: number): string {
    return this.teams.find(team => (team.id === teamId)).name;
  }

  isLoaded(): boolean {
    return this.currentLadders.length >= 5;
  }
}
