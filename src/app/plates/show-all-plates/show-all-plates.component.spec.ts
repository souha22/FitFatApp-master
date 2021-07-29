import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlatesComponent } from './show-all-plates.component';

describe('ShowAllPlatesComponent', () => {
  let component: ShowAllPlatesComponent;
  let fixture: ComponentFixture<ShowAllPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPlatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
