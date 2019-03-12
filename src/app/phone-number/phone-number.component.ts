import { Component, OnInit } from '@angular/core';
import { PhoneNumberService } from './phone-number.service';

@Component({
    selector: 'app-phone-number',
    templateUrl: './phone-number.component.html',
    styleUrls: ['./phone-number.component.css']
})

export class PhoneNumberComponent implements OnInit {
    title = 'Phone Number Generator!';
    phoneNumbers;
    phoneNumbersCount: number;
    inProgress = false;
    maximumNumber: string;
    minimumNumber: string;
    constructor(private phoneNumberService: PhoneNumberService) { }

    ngOnInit() {
        this.getAllPhoneNumbers();
    }

    getAllPhoneNumbers() {
        this.phoneNumberService.getPhoneNumbers()
            .subscribe((data) => {
                this.phoneNumbers = data['phoneNumbers'];
                this.phoneNumbers = this.phoneNumbers.filter((phoneNumber) => phoneNumber.length > 0);
                this.phoneNumbersCount = this.phoneNumbers.length;
                this.sortNumbersAsc();
            });
    }

    createAPhoneNumber() {
        this.phoneNumberService.createPhoneNumber()
            .subscribe((res) => {
                this.inProgress = true;
                this.getAllPhoneNumbers();
                this.inProgress = false;
            });
    }

    _sortNumberAsc(phoneNumbers) {
        const sortedPhoneNumbersByAsc = phoneNumbers.sort();
         this.minimumNumber = sortedPhoneNumbersByAsc[0];
         this.maximumNumber = sortedPhoneNumbersByAsc[this.phoneNumbers.length - 1];
         return sortedPhoneNumbersByAsc;
    }

    sortNumbersAsc() {
       this.phoneNumbers = this._sortNumberAsc(this.phoneNumbers);
    }

    _sortNumberDesc(phoneNumbers) {
        const sortedPhoneNumbersByDesc = phoneNumbers.sort((a, b) =>  {
            return b.localeCompare(a);
        });
        return sortedPhoneNumbersByDesc;
     }

    sortNumbersDes() {
        this.phoneNumbers = this._sortNumberDesc(this.phoneNumbers);
    }
}
