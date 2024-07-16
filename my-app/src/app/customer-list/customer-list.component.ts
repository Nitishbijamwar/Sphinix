import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.dataService.fetchItems().subscribe(data => {
      this.customers = data;
    });
  }

  deleteCustomer(id: number) {
    this.dataService.deleteCustomer(id).subscribe(() => {
      this.fetchCustomers();
    });
  }
}
