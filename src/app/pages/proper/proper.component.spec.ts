import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperComponent } from './proper.component';

describe('ProperComponent', () => {
  let component: ProperComponent;
  let fixture: ComponentFixture<ProperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
