import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRestaurantComponent } from './show-all-restaurant.component';

describe('ShowAllRestaurantComponent', () => {
  let component: ShowAllRestaurantComponent;
  let fixture: ComponentFixture<ShowAllRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
