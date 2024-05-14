import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsommingComponent } from './opsomming.component';

describe('OpsommingComponent', () => {
  let component: OpsommingComponent;
  let fixture: ComponentFixture<OpsommingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpsommingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
