import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerUpperComponent } from './lower-upper.component';

describe('LowerUpperComponent', () => {
  let component: LowerUpperComponent;
  let fixture: ComponentFixture<LowerUpperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerUpperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
