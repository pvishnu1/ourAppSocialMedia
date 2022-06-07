import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: any = {
      username: null,
      password: null
    };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("feedback form");
  }
}
