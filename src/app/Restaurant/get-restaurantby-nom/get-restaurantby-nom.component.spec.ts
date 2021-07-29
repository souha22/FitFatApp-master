import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRestaurantbyNomComponent } from './get-restaurantby-nom.component';

describe('GetRestaurantbyNomComponent', () => {
  let component: GetRestaurantbyNomComponent;
  let fixture: ComponentFixture<GetRestaurantbyNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRestaurantbyNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRestaurantbyNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
