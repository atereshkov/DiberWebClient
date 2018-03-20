import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderAddComponent } from './client-order-add.component';

describe('ClientOrderAddComponent', () => {
  let component: ClientOrderAddComponent;
  let fixture: ComponentFixture<ClientOrderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
