import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoutComponent } from './testout.component';

describe('TestoutComponent', () => {
  let component: TestoutComponent;
  let fixture: ComponentFixture<TestoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
