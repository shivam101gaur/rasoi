import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusttopbarComponent } from './custtopbar.component';

describe('CusttopbarComponent', () => {
  let component: CusttopbarComponent;
  let fixture: ComponentFixture<CusttopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusttopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusttopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
