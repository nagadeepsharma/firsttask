import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoswalleduComponent } from './kudoswalledu.component';

describe('KudoswalleduComponent', () => {
  let component: KudoswalleduComponent;
  let fixture: ComponentFixture<KudoswalleduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KudoswalleduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KudoswalleduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
