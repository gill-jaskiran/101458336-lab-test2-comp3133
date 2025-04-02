import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: Mission = {
    flight_number: 0,
    mission_name: '',
    launch_year: '',
    details: '',
    year: '',
    name: '',
    description: '',
    mission_patch_small: '',
    rocket: {
      rocket_name: '',
      rocket_type: ''
    },
    links: {
      mission_patch_small: '',
      article_link: '',
      wikipedia: '',
      video_link: ''
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
