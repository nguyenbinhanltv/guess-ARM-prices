import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadExcelFilesComponent } from './read-excel-files.component';

describe('ReadExcelFilesComponent', () => {
  let component: ReadExcelFilesComponent;
  let fixture: ComponentFixture<ReadExcelFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadExcelFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadExcelFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
