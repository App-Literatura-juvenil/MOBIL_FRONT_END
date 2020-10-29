import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorazonComponent } from './corazon.component';

describe('CorazonComponent', () => {
  let component: CorazonComponent;
  let fixture: ComponentFixture<CorazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorazonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
