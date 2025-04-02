import { TestBed } from '@angular/core/testing';

import { SpaceXAPIService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpaceXAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
