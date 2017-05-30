import { TestBed, inject } from '@angular/core/testing';
import { QuestionsService } from './questions.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsService]
    });
  });

  it('should ...', inject([QuestionsService], (service: QuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
