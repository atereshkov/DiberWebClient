import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSupportListComponent } from './client-support-list.component';

describe('ClientSupportListComponent', () => {
  let component: ClientSupportListComponent;
  let fixture: ComponentFixture<ClientSupportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSupportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSupportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
