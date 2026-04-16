import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './requests.html',
  styleUrl: './requests.css'
})
export class RequestsComponent {

  showForm = false;

  newRequest = {
    type: '',
    description: ''
  };

  requests = [
    { type: 'New Connection', status: 'Pending' },
    { type: 'Complaint', status: 'Done' }
  ];

  addRequest() {
    this.requests.push({
      type: this.newRequest.type,
      status: 'Pending'
    });

    this.newRequest.type = '';
    this.newRequest.description = '';
    this.showForm = false;
  }
}