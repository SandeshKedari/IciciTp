import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPolicyRenewalComponent } from './all-policy-renewal.component';

describe('AllPolicyRenewalComponent', () => {
  let component: AllPolicyRenewalComponent;
  let fixture: ComponentFixture<AllPolicyRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPolicyRenewalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPolicyRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
