import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoInComponent } from './flujo-in.component';

describe('FlujoInComponent', () => {
  let component: FlujoInComponent;
  let fixture: ComponentFixture<FlujoInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
