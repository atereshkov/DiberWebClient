import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeagoPipeModuleComponent } from './timeago-pipe-module.component';

describe('TimeagoPipeModuleComponent', () => {
  let component: TimeagoPipeModuleComponent;
  let fixture: ComponentFixture<TimeagoPipeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeagoPipeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeagoPipeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
