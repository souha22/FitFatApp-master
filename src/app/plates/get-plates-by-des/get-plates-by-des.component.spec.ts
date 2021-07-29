import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlatesByDesComponent } from './get-plates-by-des.component';

describe('GetPlatesByDesComponent', () => {
  let component: GetPlatesByDesComponent;
  let fixture: ComponentFixture<GetPlatesByDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPlatesByDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPlatesByDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
