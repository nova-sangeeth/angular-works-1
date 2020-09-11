import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testout',
  templateUrl: './testout.component.html',
  styleUrls: ['./testout.component.scss']
})
export class TestoutComponent implements OnInit {
  clickCounter: number = 0;
  address: string = "";
  name: string = "nova";
  constructor() { }

  ngOnInit(): void {
  }
  countClick() {
    this.clickCounter += 2
  }
}
