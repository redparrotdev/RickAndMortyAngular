import { TestBed } from '@angular/core/testing';

import { UrlJoinerService } from './url-joiner.service';

describe('UrlJoinerService', () => {
  let service: UrlJoinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlJoinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
