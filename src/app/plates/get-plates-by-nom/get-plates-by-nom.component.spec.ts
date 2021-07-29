import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPlatesByNomComponent } from './get-plates-by-nom.component';

describe('GetPlatesByNomComponent', () => {
  let component: GetPlatesByNomComponent;
  let fixture: ComponentFixture<GetPlatesByNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPlatesByNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPlatesByNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
