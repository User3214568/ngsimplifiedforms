import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWrapperComponent } from './group-wrapper.component';

describe('GroupWrapperComponent', () => {
  let component: GroupWrapperComponent;
  let fixture: ComponentFixture<GroupWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
