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
  it('should return a sorted phone numbers in ascending', () => {
    const phoneNumbers = ['0068356264', '0138818774', '0141514361'];
    const data = {
      message: 'Phone Number fetched successfully',
      phoneNumbers,
    };
    const fixture = TestBed.createComponent(PhoneNumberComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;

    const numbers = app._sortNumberAsc(data['phoneNumbers']);

    expect(numbers).toBe(data.phoneNumbers);
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
