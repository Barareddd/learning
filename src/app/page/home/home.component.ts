import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activated: number | null = null;
  activate(tabs: number) {
    if (tabs !== null) {
      this.activated = tabs;
      console.log(this.activated);
    } else {
    }
  }
  ngOnInit(): void {}
}
