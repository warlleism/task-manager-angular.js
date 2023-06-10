import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModelComponent } from './box-model.component';

describe('BoxModelComponent', () => {
  let component: BoxModelComponent;
  let fixture: ComponentFixture<BoxModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxModelComponent]
    });
    fixture = TestBed.createComponent(BoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
