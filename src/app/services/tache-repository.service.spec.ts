import { TestBed } from '@angular/core/testing';

import { TacheRepositoryService } from './tache-repository.service';

describe('TacheRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacheRepositoryService = TestBed.get(TacheRepositoryService);
    expect(service).toBeTruthy();
  });
});
