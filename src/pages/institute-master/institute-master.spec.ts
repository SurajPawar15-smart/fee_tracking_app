import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteMaster } from './institute-master';

describe('InstituteMaster', () => {
  let component: InstituteMaster;
  let fixture: ComponentFixture<InstituteMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituteMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteMaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
