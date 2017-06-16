import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierDashboardComponent } from './courier-dashboard.component';

describe('CourierDashboardComponent', () => {
  let component: CourierDashboardComponent;
  let fixture: ComponentFixture<CourierDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
