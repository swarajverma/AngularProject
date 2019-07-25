import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignuserstoorgrolesComponent } from './assignuserstoorgroles.component';

describe('AssignuserstoorgrolesComponent', () => {
  let component: AssignuserstoorgrolesComponent;
  let fixture: ComponentFixture<AssignuserstoorgrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignuserstoorgrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignuserstoorgrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
