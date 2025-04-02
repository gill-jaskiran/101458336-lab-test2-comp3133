import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXAPIService {

  private apiUrl = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) { }

  getMissions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAllMissions(): Observable<any> {
    return this.http.get(this.apiUrl);  
  }
}
