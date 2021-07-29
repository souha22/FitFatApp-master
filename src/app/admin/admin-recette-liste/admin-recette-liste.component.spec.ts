import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecetteListeComponent } from './admin-recette-liste.component';

describe('AdminRecetteListeComponent', () => {
  let component: AdminRecetteListeComponent;
  let fixture: ComponentFixture<AdminRecetteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecetteListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecetteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
