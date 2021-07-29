import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlatesListComponent } from './admin-plates-list.component';

describe('AdminPlatesListComponent', () => {
  let component: AdminPlatesListComponent;
  let fixture: ComponentFixture<AdminPlatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
