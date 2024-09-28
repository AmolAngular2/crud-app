import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDbComponent } from './two-way-db.component';

describe('TwoWayDbComponent', () => {
  let component: TwoWayDbComponent;
  let fixture: ComponentFixture<TwoWayDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayDbComponent]
    });
    fixture = TestBed.createComponent(TwoWayDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
