import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlateComponent } from './update-plate.component';

describe('UpdatePlateComponent', () => {
  let component: UpdatePlateComponent;
  let fixture: ComponentFixture<UpdatePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
