import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { FormsModule } from '@angular/forms'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { provideHttpClient } from '@angular/common/http'; 
import { SpaceXAPIService } from './network/spacexapi.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionfilterComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    SpaceXAPIService,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
