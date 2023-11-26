import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCard1Component } from './profile-card1.component';

describe('ProfileCard1Component', () => {
  let component: ProfileCard1Component;
  let fixture: ComponentFixture<ProfileCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
