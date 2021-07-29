import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlatesComponent } from './delete-plates.component';

describe('DeletePlatesComponent', () => {
  let component: DeletePlatesComponent;
  let fixture: ComponentFixture<DeletePlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
