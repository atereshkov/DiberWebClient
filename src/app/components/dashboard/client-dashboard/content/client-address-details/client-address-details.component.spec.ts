import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressDetailsComponent } from './client-address-details.component';

describe('ClientAddressDetailsComponent', () => {
  let component: ClientAddressDetailsComponent;
  let fixture: ComponentFixture<ClientAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
