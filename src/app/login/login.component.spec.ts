import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  xit('should return model invalid when form is empty', () => {
  });

  xit('should validate email input as required', () => {
  });

  xit('should validate password input as required', () => {
  });

  xit('should validate email format', () => {
  });

  xit('should validate email format correctly', () => {
  });

  xit('should render email validation message when formControl is submitted and invalid', () => {
  });

  xit('should render password validation message when formControl is submitted and invalid', () => {
  });

  xit('should invoke auth service when form is valid', () => {
  });
});
