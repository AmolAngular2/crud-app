import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectComponent } from './structural-direct.component';

describe('StructuralDirectComponent', () => {
  let component: StructuralDirectComponent;
  let fixture: ComponentFixture<StructuralDirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralDirectComponent]
    });
    fixture = TestBed.createComponent(StructuralDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
