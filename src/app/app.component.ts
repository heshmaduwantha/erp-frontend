import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzPageHeaderComponent } from "ng-zorro-antd/page-header";
import { NzTabComponent, NzTabSetComponent } from "ng-zorro-antd/tabs";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { CustomerComponent } from "./customer/customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzPageHeaderComponent, NzTabSetComponent, NzTabComponent, CustomerComponent, NzIconDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'erp-backend';
}
