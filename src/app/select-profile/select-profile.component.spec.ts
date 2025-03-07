import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfileComponent } from './select-profile.component';

describe('SelectProfileComponent', () => {
  let component: SelectProfileComponent;
  let fixture: ComponentFixture<SelectProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
