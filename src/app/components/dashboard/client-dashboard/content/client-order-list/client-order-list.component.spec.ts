import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderListComponent } from './client-order-list.component';

describe('ClientOrderListComponent', () => {
  let component: ClientOrderListComponent;
  let fixture: ComponentFixture<ClientOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
