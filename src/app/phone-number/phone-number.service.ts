import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class PhoneNumberService {
    constructor(private http: HttpClient) { }

    getPhoneNumbers() {
        const url = 'http://localhost:8080/api/v1/phone-numbers';
        return this.http.get(url);
    }

    createPhoneNumber() {
        const url = 'http://localhost:8080/api/v1/phone-number';
        return this.http.get(url, {responseType: 'text'});
    }
}
