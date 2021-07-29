import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRecetteComponent } from './show-all-recette.component';

describe('ShowAllRecetteComponent', () => {
  let component: ShowAllRecetteComponent;
  let fixture: ComponentFixture<ShowAllRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
