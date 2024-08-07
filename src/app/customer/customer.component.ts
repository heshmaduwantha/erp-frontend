import { Component } from "@angular/core";
import { CustomerService } from "./customer.service";
import { Customer } from "./customer";

@Component({
  selector: "app-customer",
  standalone: true,
  imports: [],
  templateUrl: "./customer.component.html",
  styleUrl: "./customer.component.sass"
})
export class CustomerComponent {

  dataList: Customer[] = [];

  constructor(
    private service: CustomerService
  ) {
  }

  getAll() {
    this.service.getAll()
      .subscribe(x => {
        this.dataList = x;
      });
  }
}
