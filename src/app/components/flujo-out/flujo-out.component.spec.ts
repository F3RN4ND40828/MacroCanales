import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoOutComponent } from './flujo-out.component';

describe('FlujoOutComponent', () => {
  let component: FlujoOutComponent;
  let fixture: ComponentFixture<FlujoOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
