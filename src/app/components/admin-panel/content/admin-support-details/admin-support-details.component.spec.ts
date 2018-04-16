import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupportDetailsComponent } from './admin-support-details.component';

describe('AdminSupportDetailsComponent', () => {
  let component: AdminSupportDetailsComponent;
  let fixture: ComponentFixture<AdminSupportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSupportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
