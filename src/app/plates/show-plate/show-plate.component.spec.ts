import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlateComponent } from './show-plate.component';

describe('ShowPlateComponent', () => {
  let component: ShowPlateComponent;
  let fixture: ComponentFixture<ShowPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
