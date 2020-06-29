import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataExcelComponent } from './show-data-excel.component';

describe('ShowDataExcelComponent', () => {
  let component: ShowDataExcelComponent;
  let fixture: ComponentFixture<ShowDataExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
