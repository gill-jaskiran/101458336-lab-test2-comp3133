import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();

  onYearChange(year: string): void {
    this.yearSelected.emit(year);
  }
  
}


