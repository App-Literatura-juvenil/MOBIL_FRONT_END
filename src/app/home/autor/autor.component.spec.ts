import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutorComponent } from './autor.component';

describe('AutorComponent', () => {
  let component: AutorComponent;
  let fixture: ComponentFixture<AutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
