import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidmoneyComponent } from './widmoney.component';

describe('WidmoneyComponent', () => {
  let component: WidmoneyComponent;
  let fixture: ComponentFixture<WidmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidmoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
