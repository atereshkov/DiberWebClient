import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderDetaillsComponent } from './client-order-details.component';

describe('ClientOrderDetaillsComponent', () => {
  let component: ClientOrderDetaillsComponent;
  let fixture: ComponentFixture<ClientOrderDetaillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrderDetaillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
