import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer = { name: '', email: '' };

  constructor(private dataService: DataService, private router: Router) { }

  addCustomer() {
    this.dataService.addCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
