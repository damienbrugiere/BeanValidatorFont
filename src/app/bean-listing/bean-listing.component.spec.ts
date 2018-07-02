import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanListingComponent } from './bean-listing.component';

describe('BeanListingComponent', () => {
  let component: BeanListingComponent;
  let fixture: ComponentFixture<BeanListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
