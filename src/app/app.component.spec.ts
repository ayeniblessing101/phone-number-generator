import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent,
        PhoneNumberComponent
      ],
      providers: [],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
