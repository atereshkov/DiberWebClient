import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressListComponent } from './client-address-list.component';

describe('ClientAddressListComponent', () => {
  let component: ClientAddressListComponent;
  let fixture: ComponentFixture<ClientAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
