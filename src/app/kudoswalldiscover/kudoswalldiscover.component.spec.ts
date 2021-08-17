import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoswalldiscoverComponent } from './kudoswalldiscover.component';

describe('KudoswalldiscoverComponent', () => {
  let component: KudoswalldiscoverComponent;
  let fixture: ComponentFixture<KudoswalldiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KudoswalldiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KudoswalldiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
