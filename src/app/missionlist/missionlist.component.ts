import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpaceXAPIService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  Missions: Mission[] = [];  

  constructor(private spaceXAPIService: SpaceXAPIService) {}

  ngOnInit(): void {
    this.spaceXAPIService.getMissions().subscribe((missions) => {
      this.Missions = missions;
    });
  }
}


