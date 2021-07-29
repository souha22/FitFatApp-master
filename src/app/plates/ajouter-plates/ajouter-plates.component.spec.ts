import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlatesComponent } from './ajouter-plates.component';

describe('AjouterPlatesComponent', () => {
  let component: AjouterPlatesComponent;
  let fixture: ComponentFixture<AjouterPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPlatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
