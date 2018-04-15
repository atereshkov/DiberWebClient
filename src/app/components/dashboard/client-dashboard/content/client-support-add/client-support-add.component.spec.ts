import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSupportAddComponent } from './client-support-add.component';

describe('ClientSupportAddComponent', () => {
  let component: ClientSupportAddComponent;
  let fixture: ComponentFixture<ClientSupportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSupportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSupportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
