import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  peopleShow = 'name';
  people(value: any) {
    this.peopleShow = value.name;
  }
  ngOnInit(): void {}
}
