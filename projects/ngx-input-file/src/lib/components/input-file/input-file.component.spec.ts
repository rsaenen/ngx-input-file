import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFileComponent } from './input-file.component';
import { InputFileService } from '../../services/input-file.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

describe('InputFileComponent', () => {
  let component: InputFileComponent;
  let fixture: ComponentFixture<InputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFileComponent ],
        imports: [CommonModule,
            FormsModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            ReactiveFormsModule],
        providers: [InputFileService, { provide: 'config', useValue: { } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
