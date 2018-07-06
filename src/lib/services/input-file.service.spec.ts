import { TestBed, inject } from '@angular/core/testing';

import { InputFileService } from './input-file.service';

describe('InputFileService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InputFileService]
        });
    });

    it('should be created', inject([InputFileService], (service: InputFileService) => {
        expect(service).toBeTruthy();
    }));
});
