import { TestBed } from '@angular/core/testing';

import { SiblingInteractionServiceService } from './sibling-interaction-service.service';

describe('SiblingInteractionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingInteractionServiceService = TestBed.get(SiblingInteractionServiceService);
    expect(service).toBeTruthy();
  });
});
