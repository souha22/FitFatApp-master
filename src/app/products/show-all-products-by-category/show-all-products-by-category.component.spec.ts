import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProductsByCategoryComponent } from './show-all-products-by-category.component';

describe('ShowAllProductsByCategoryComponent', () => {
  let component: ShowAllProductsByCategoryComponent;
  let fixture: ComponentFixture<ShowAllProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProductsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
