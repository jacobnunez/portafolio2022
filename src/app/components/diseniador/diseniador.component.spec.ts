import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseniadorComponent } from './diseniador.component';

describe('DiseniadorComponent', () => {
  let component: DiseniadorComponent;
  let fixture: ComponentFixture<DiseniadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseniadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseniadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
