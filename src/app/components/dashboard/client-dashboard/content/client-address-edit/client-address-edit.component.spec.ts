import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressEditComponent } from './client-address-edit.component';

describe('ClientAddressEditComponent', () => {
  let component: ClientAddressEditComponent;
  let fixture: ComponentFixture<ClientAddressEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddressEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
