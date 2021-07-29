import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecetteComponent } from './show-recette.component';

describe('ShowRecetteComponent', () => {
  let component: ShowRecetteComponent;
  let fixture: ComponentFixture<ShowRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
