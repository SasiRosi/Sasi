import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarListRComponent } from './bar-list-r.component';

describe('BarListRComponent', () => {
  let component: BarListRComponent;
  let fixture: ComponentFixture<BarListRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarListRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarListRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
