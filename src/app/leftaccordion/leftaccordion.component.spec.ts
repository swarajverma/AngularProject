import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftaccordionComponent } from './leftaccordion.component';

describe('LeftaccordionComponent', () => {
  let component: LeftaccordionComponent;
  let fixture: ComponentFixture<LeftaccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftaccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
