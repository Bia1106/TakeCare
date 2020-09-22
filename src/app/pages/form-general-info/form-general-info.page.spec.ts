import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormGeneralInfoPage } from './form-general-info.page';

describe('FormGeneralInfoPage', () => {
  let component: FormGeneralInfoPage;
  let fixture: ComponentFixture<FormGeneralInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormGeneralInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
