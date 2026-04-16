import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './bills.html',
  styleUrl: './bills.css'
})
export class BillsComponent {

  search = '';

  bills = [
    { id: '001', amount: 120, status: 'Paid', meter: '12345', dueDate: '2026-04-20' },
    { id: '002', amount: 80, status: 'Unpaid', meter: '67890', dueDate: '2026-04-25' },
    { id: '003', amount: 200, status: 'Paid', meter: '54321', dueDate: '2026-04-30' }
  ];

  selectedBill: any = null;

  showDetails(bill: any) {
    this.selectedBill = bill;
  }
}