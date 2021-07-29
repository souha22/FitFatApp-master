import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRestaurantbyAdresseComponent } from './get-restaurantby-adresse.component';

describe('GetRestaurantbyAdresseComponent', () => {
  let component: GetRestaurantbyAdresseComponent;
  let fixture: ComponentFixture<GetRestaurantbyAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRestaurantbyAdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRestaurantbyAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
