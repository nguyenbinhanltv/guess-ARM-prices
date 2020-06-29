import { TestBed } from '@angular/core/testing';

import { DataFilesService } from './data-files.service';

describe('DataFilesService', () => {
  let service: DataFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
