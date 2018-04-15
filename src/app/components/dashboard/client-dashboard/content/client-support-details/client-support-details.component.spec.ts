import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSupportDetailsComponent } from './client-support-details.component';

describe('ClientSupportDetailsComponent', () => {
  let component: ClientSupportDetailsComponent;
  let fixture: ComponentFixture<ClientSupportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSupportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSupportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
