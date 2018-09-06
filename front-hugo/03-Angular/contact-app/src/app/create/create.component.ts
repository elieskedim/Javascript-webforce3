import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  nouveauContact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
  }

  exportContact() {
    console.log(this.nouveauContact);
  }
}
