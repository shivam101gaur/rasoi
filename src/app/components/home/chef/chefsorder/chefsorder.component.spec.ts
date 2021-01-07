import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsorderComponent } from './chefsorder.component';

describe('ChefsorderComponent', () => {
  let component: ChefsorderComponent;
  let fixture: ComponentFixture<ChefsorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
