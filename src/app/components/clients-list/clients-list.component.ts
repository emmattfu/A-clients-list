import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/ClientsListItem'
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  client: Client = {
  name: '',
  email: '',
  age: 18,
  phoneNumber: '',
  comments: ''
  };

  clientsList: Client[];



  @ViewChild('form') form: NgForm;


  constructor() { }

  ngOnInit() {

  }

  onSubmit(form) {

    if (form.invalid) return;

    if (!this.clientsList)  this.clientsList = [];

    const newClient = {
      name: this.client.name,
      email: this.client.email,
      age: +this.client.age,
      phoneNumber: this.client.phoneNumber,
      comments: this.client.comments,
    };

    this.clientsList.push(newClient);

    this.form.resetForm();

  }

  removeClient(client) {
    this.clientsList.splice(this.clientsList.indexOf(client), 1);

    if (!this.clientsList.length) this.clientsList = null;

  }

}
