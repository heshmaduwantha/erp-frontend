import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Observable} from "rxjs";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3005/customer';

  constructor(
    private api: ApiService
  ) {
  }

  public save(customer: Customer): Observable<Customer> {
    return this.api.post(`${this.apiUrl}`, customer);
  }

  public getAll(): Observable<Customer[]>{
    return this.api.get(`${this.apiUrl}/get-all`);
  }
}
