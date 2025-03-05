import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPinReplaceComponent } from './forgot-pin-replace.component';

describe('ForgotPinReplaceComponent', () => {
  let component: ForgotPinReplaceComponent;
  let fixture: ComponentFixture<ForgotPinReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPinReplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPinReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
