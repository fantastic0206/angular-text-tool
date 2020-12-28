import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksModalComponent } from './books-modal.component';

describe('BooksModalComponent', () => {
  let component: BooksModalComponent;
  let fixture: ComponentFixture<BooksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
