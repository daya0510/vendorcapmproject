import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private apiUrl = '/api/odata/v4/vendor/Vendor';

  constructor(private http: HttpClient) { }

  getVendors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVendor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}(${id})`);
  }

  // createVendor(vendor: Vendor): Observable<any> {
  //   return this.http.post(this.apiUrl, vendor);
  // }

  // updateVendor(id: number, vendor: Vendor): Observable<any> {
  //   return this.http.put(`${this.apiUrl}(${id})`, vendor);
  // }

  // deleteVendor(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}(${id})`);
  // }
}