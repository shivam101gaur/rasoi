import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductlistComponent } from './myproductlist.component';

describe('MyproductlistComponent', () => {
  let component: MyproductlistComponent;
  let fixture: ComponentFixture<MyproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
