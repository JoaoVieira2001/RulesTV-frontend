import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordCreatePasswordComponent } from './forgot-password-create-password.component';

describe('ForgotPasswordCreatePasswordComponent', () => {
  let component: ForgotPasswordCreatePasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordCreatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordCreatePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordCreatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
