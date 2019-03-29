import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidLowerComponent } from './mid-lower.component';

describe('MidLowerComponent', () => {
  let component: MidLowerComponent;
  let fixture: ComponentFixture<MidLowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidLowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
