import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiceInputComponent } from './mice-input.component';

describe('MiceInputComponent', () => {
  let component: MiceInputComponent;
  let fixture: ComponentFixture<MiceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
