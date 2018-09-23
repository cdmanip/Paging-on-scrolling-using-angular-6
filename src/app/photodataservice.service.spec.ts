import { TestBed } from '@angular/core/testing';

import { PhotodataserviceService } from './photodataservice.service';

describe('PhotodataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotodataserviceService = TestBed.get(PhotodataserviceService);
    expect(service).toBeTruthy();
  });
});
