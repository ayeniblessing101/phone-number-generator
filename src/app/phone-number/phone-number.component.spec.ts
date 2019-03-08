import { TestBed, async } from '@angular/core/testing';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneNumberService } from './phone-number.service';
import { of } from 'rxjs';
describe('PhoneNumberComponent', () => {
    let phoneNumberComponent: PhoneNumberComponent;
    let phoneNumberService: PhoneNumberService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        PhoneNumberComponent
      ],
      providers: [PhoneNumberService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent( PhoneNumberComponent );
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(PhoneNumberComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Phone Number Generator!');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PhoneNumberComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Phone Number Generator!');
  }));
  it('should return a sorted phone numbers in ascending', () => {
    const data = ['0068356264', '0138818774', '0141514361'];
    const fixture = TestBed.createComponent(PhoneNumberComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;

    const numbers = app._sortNumberAsc(data);

    expect(numbers).toBe(data);
  });
  it('should return a sorted phone numbers in descending', () => {
    const data = ['0141514361', '0138818774', '0068356264'];
    const fixture = TestBed.createComponent(PhoneNumberComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;

    const numbers = app._sortNumberDesc(data);

    expect(numbers).toBe(data);
  });
});
