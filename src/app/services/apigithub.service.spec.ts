import { TestBed } from '@angular/core/testing';

import { ApigithubService } from './apigithub.service';

describe('ApigithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApigithubService = TestBed.get(ApigithubService);
    expect(service).toBeTruthy();
  });
});
