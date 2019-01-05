import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestComponent } from './intrest.component';

describe('IntrestComponent', () => {
  let component: IntrestComponent;
  let fixture: ComponentFixture<IntrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
