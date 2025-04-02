import { Component } from '@angular/core';
import { SpaceXAPIService } from './network/spacexapi.service';
import { Mission } from './models/mission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  missions: Mission[] = [];
  selectedYear: string = '';

  constructor(private spacexService: SpaceXAPIService) {}

  onFilterMissions(year: string): void {
    console.log('Selected Year:', year);
  }

  title = '101458336-lab-test2-comp3133';
}


