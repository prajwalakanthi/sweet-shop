import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsScrenComponent } from './details-scren.component';

describe('DetailsScrenComponent', () => {
  let component: DetailsScrenComponent;
  let fixture: ComponentFixture<DetailsScrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsScrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsScrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
