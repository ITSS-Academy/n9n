import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSettingComponent } from './dialog-setting.component';

describe('DialogSettingComponent', () => {
  let component: DialogSettingComponent;
  let fixture: ComponentFixture<DialogSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSettingComponent]
    });
    fixture = TestBed.createComponent(DialogSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
