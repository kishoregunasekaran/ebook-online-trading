import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLikeComponent } from './login-like.component';

describe('LoginLikeComponent', () => {
  let component: LoginLikeComponent;
  let fixture: ComponentFixture<LoginLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginLikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
