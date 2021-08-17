import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProkudoswallComponent } from './prokudoswall.component';

describe('ProkudoswallComponent', () => {
  let component: ProkudoswallComponent;
  let fixture: ComponentFixture<ProkudoswallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProkudoswallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProkudoswallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
