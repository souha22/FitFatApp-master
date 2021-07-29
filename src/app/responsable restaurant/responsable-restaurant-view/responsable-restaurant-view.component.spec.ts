import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableRestaurantViewComponent } from './responsable-restaurant-view.component';

describe('ResponsableRestaurantViewComponent', () => {
  let component: ResponsableRestaurantViewComponent;
  let fixture: ComponentFixture<ResponsableRestaurantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableRestaurantViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableRestaurantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
