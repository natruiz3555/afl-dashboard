import { Component, OnInit } from '@angular/core';
import { Ladder } from '../Ladder';
import { CladService } from '../clad.service';


@Component({
  selector: 'app-parentclad',
  templateUrl: './parentclad.component.html',
  styleUrls: ['./parentclad.component.css']
})
export class ParentcladComponent implements OnInit {
  clads: Ladder[];
  actualclad: Ladder[];

  constructor(private dataService:CladService) { }

  ngOnInit(): void {
    this.getActualCladder();
  }

  /*onSelect(team: Team): void{
    this.selectedTeam = clads;
  }*/

  getCLadder(): void{
    this.dataService.getCLadder().subscribe(temp => {this.clads = temp});
  }

  getActualCladder(): void{
    this.dataService.getCLadder().subscribe(temp => {
      var tempArr = [];
      temp.forEach(element => {
        { tempArr.push(element); }
      });
      this.actualclad = tempArr;
    });
  }
}
