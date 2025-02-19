import { TestBed } from '@angular/core/testing';

import { ListOfPonisService } from './list-of-ponis.service';

describe('ListOfPonisService', () => {
  let service: ListOfPonisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfPonisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
