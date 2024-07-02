import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBwComponentsComponent } from './communication-bw-components.component';

describe('CommunicationBwComponentsComponent', () => {
  let component: CommunicationBwComponentsComponent;
  let fixture: ComponentFixture<CommunicationBwComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationBwComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationBwComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
