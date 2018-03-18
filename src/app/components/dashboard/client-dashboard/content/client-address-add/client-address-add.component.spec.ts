import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressAddComponent } from './client-address-add.component';

describe('ClientAddressAddComponent', () => {
  let component: ClientAddressAddComponent;
  let fixture: ComponentFixture<ClientAddressAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddressAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
