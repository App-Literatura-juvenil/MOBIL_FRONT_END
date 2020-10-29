import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HombreCicatrizComponent } from './hombre-cicatriz.component';

describe('HombreCicatrizComponent', () => {
  let component: HombreCicatrizComponent;
  let fixture: ComponentFixture<HombreCicatrizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HombreCicatrizComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HombreCicatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
